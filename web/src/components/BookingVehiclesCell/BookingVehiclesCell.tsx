import type { VehiclesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Vehicle from 'src/components/cards/vehicle'

export const QUERY = gql`
  query VehiclesQuery {
    vehicles {
      id
      imgID
      title
      description
      passengers
      cover
      fees
      extras
      price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ vehicles }: CellSuccessProps<VehiclesQuery>) => {
  console.log('vehicles', vehicles)
  return vehicles.map((item) => (
    <Vehicle
      key={item.title + item.id}
      imgID={item.imgID}
      title={item.title}
      description={item.description}
      passengers={item.passengers}
      cover={item.cover}
      fees={item.fees}
      extras={item.extras}
      price={item.price}
    />
  ))
}
