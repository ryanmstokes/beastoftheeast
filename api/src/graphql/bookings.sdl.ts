export const schema = gql`
  type Booking {
    id: Int!
    email: String!
    name: String!
    lastName: String!
  }

  type Query {
    bookings: [Booking!]! @requireAuth
    booking(id: Int!): Booking @requireAuth
  }

  input CreateBookingInput {
    email: String!
    name: String!
    lastName: String!
  }

  input UpdateBookingInput {
    email: String
    name: String
    lastName: String
  }

  type Mutation {
    createBooking(input: CreateBookingInput!): Booking! @requireAuth
    updateBooking(id: Int!, input: UpdateBookingInput!): Booking! @requireAuth
    deleteBooking(id: Int!): Booking! @requireAuth
  }
`
