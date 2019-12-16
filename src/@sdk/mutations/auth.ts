import gql from "graphql-tag";

import { userFragment } from "../fragments/auth";

export const tokenAuthMutation = gql`
  ${userFragment}
  mutation TokenAuth($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      errors {
        field
        message
      }
      user {
        ...User
      }
    }
  }
`;

export const tokenVeryficationMutation = gql`
  ${userFragment}
  mutation VerifyToken($token: String!) {
    tokenVerify(token: $token) {
      payload
      user {
        ...User
      }
    }
  }
`;

// Kakao login mutation
export const socialAuthMutation = gql`
 ${userFragment}
 mutation SocialAuth($accessToken: String!, $provider: String!){
   socialAuth(accessToken: $$accessToken, provider: $provider){
     social{
       user{
         ...User
       }
     }
     token
   }
 }
`;
