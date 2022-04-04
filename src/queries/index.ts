import gql from "graphql-tag";

const GET_VEHICLES = gql`
      {
          vehicles(lang:"ru") {
            id
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
                title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
     }`;

const GET_NATIONS = gql`
    {
        nations(lang:"ru") {
            name
            title
            icons{
                tiny
            }
        }
    }`

const GET_TYPES = gql`
    {
        vehicleTypes(lang: "ru"){
            name
            title
            icons{
                default
            }
        }
    }
`

const GET_BY_ID =(id: string) => gql`
      {
          vehicles(lang:"ru", vehicleId: "${id}") {
            id
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
                title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
     }`;

export const Queries = {
    GET_VEHICLES,
    GET_NATIONS,
    GET_TYPES,
    GET_BY_ID
}