import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here

    // CredentialsProvider : 쇼셜 뿐만 아니라 아이디, 비번으로 로그인 가능하게 해줌 (jwt만 사용 가능)
    CredentialsProvider({
      // 1. 로그인 페이지 폼 자동 생성 해주는 코드
      name: 'credentials',
      credentials: {
        // 로그인 페이지에 들어갈 input들
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      // 2. 로그인 요청 시 실행되는 코드
      // 직접 DB에서 아이디, 비번 비교하고
      // 아이디, 비번 맞으면 return 결과
      // 틀리면 return null 해야함
      async authorize(credentials) {
        const db = (await connectDB).db('forum');
        const user = await db
          .collection('user')
          .findOne({ email: credentials.email });
        if (!user) {
          console.log('해당 이메일은 없음');
          return null;
        }

        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!pwcheck) {
          console.log('비번틀림');
          return null;
        }
        return user;
      },
    }),
  ],

  // 3. jwt 써놔야 잘 작동 + jwt 만료일 설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30일
  },

  callbacks: {
    // 4. jwt 만들 때 실행되는 코드
    // user 변수는 DB의 유저 정보 담겨있고 token.user에 뭐 저장하면 jwt에 들어감
    jwt: async ({ token, user }) => {
      if (user) {
        // jwt에 기입할 정보
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    // 5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
};

export default NextAuth(authOptions);

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: 'Github에서 발급받은ID',
//       clientSecret: 'Github에서 발급받은Secret',
//     }),
//   ],
//   secret: 'jwt 생성 시 쓰는 암호',  // 소셜 로그인은 기본적으로 jwt 방식 사용
// };

// MongoDBAdapter를 사용하여 로그인 시 MongoDB에 3개의 컬렉션이 생성된다
// accounts : 가입된 유저 계정 보관
// sessions : 현재 로그인 된 유저 정보(+ 로그인 유효기간)
// users : 가입된 유저 정보 보관(유저 간 구분은 이메일로 함)
