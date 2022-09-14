import { gql } from "@apollo/client";
export const GET_MISSIONS = gql`
  query GetMissions {
        missions {
          name
          id
          manufacturers
          description
        }
      }
      
`;