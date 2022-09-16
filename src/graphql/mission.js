import { gql } from "@apollo/client";

export const GET_MISSION = gql`
query GetMission($id: ID!) {
    mission(id: $id) {
        id
        manufacturers
        name
        website
        twitter
        wikipedia
        description
        payloads {
            nationality
        }
    }
}
`;