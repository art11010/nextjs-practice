import { connectDB } from '@/util/database';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    // CredentialsProvider : JWT만 사용 가능
  ],
  secret: 'qwer1234',
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
//   secret: 'JWT 생성 시 쓰는 암호',  // 소셜 로그인은 기본적으로 JWT 방식 사용
// };

// MongoDBAdapter를 사용하여 로그인 시 MongoDB에 3개의 컬렉션이 생성된다
// accounts : 가입된 유저 계정 보관
// sessions : 현재 로그인 된 유저 정보(+ 로그인 유효기간)
// users : 가입된 유저 정보 보관(유저 간 구분은 이메일로 함)
