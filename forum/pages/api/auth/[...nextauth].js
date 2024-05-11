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
      // clientId: process.env.GITHUB_OAUTH_ID,
      // clientSecret: process.env.GITHUB_OAUTH_SECRET,
      clientId: process.env.GITHUB_APP_ID,
      clientSecret: process.env.GITHUB_APP_SECRET,
    }),

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
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 30 * 24 * 60 * 60, // 30일
  // },

  // callbacks: {
  //   // 4. jwt 만들 때 실행되는 코드
  //   // user 변수는 DB의 유저 정보 담겨있고 token.user에 뭐 저장하면 jwt에 들어감
  //   jwt: async ({ token, user }) => {
  //     if (user) {
  //       // jwt에 기입할 정보
  //       token.user = {};
  //       token.user.name = user.name;
  //       token.user.email = user.email;
  //       token.user.role = user.role;
  //     }
  //     return token;
  //   },
  //   // 5. 유저 세션이 조회될 때 마다 실행되는 코드
  //   session: async ({ session, token }) => {
  //     session.user = token.user;
  //     return session;
  //   },
  // },

  // secret: process.env.NEXTAUTH_SECRET,
  // adapter: MongoDBAdapter(connectDB),

  // refresh token
  // 기간설정은 무시됨, github은 access token 유효기간 8시간, refresh token 유효기간 6개월
  jwt: {
    maxAge: 60,
  },
  callbacks: {
    // JWT 사용할 때마다 실행됨, return 오른쪽에 뭐 적으면 그걸 JWT로 만들어서 유저에게 보내줌
    async jwt({ token, account, user }) {
      console.log('account', account);
      console.log('user', user);
      console.log('token', token);

      // 1. 첫 JWT 토큰 만들어주기 (첫 로그인시에만 실행)
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at,
          user,
        };
      }

      // 2. 남은 시간이 임박한 경우 access token 재발급하기
      // 지금은 개발중이라 8시간 - 10초 남았을 때 재발급중
      let 남은시간 = token.accessTokenExpires - Math.round(Date.now() / 1000);
      if (남은시간 < 60 * 60 * 8 - 10) {
        console.log('유효기간 얼마안남음');
        let 새로운JWT = await refreshAccessToken(token); // 3. 깃헙에게 재발급해달라고 조르기
        console.log('새로운 JWT : ', 새로운JWT);
        return 새로운JWT;
      } else {
        return token;
      }
    },

    //getServerSession 실행시 토큰에 있던 어떤 정보 뽑아서 컴포넌트로 보내줄지 결정가능
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
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
