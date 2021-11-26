export const schema = gql`
  type Vehicle {
    id: Int!
    imgID: Int!
    title: String!
    description: String!
    passengers: String!
    extras: String!
    cover: String!
    fees: String!
    price: Int!
  }

  type Query {
    vehicles: [Vehicle!]! @requireAuth
    vehicle(id: Int!): Vehicle @requireAuth
  }

  input CreateVehicleInput {
    imgID: Int!
    title: String!
    description: String!
    passengers: Int!
    extras: String!
    cover: String!
    fees: String!
    price: Int!
  }

  input UpdateVehicleInput {
    imgID: String
    title: String
    description: String
    passengers: Int
    extras: String
    cover: String
    fees: String
    price: Int
  }

  type Mutation {
    createVehicle(input: CreateVehicleInput!): Vehicle! @requireAuth
    updateVehicle(id: Int!, input: UpdateVehicleInput!): Vehicle! @requireAuth
    deleteVehicle(id: Int!): Vehicle! @requireAuth
  }
`
