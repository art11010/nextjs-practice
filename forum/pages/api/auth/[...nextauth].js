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
  ],
};

export default NextAuth(authOptions);

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: 'Github에서 발급받은ID',
//       clientSecret: 'Github에서 발급받은Secret',
//     }),
//   ],
//   secret: 'jwt 생성 시 쓰는 암호',
// };
