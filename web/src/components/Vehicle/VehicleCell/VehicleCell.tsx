import type { FindVehicleById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Vehicle from 'src/components/Vehicle/Vehicle'

export const QUERY = gql`
  query FindVehicleById($id: Int!) {
    vehicle: vehicle(id: $id) {
      id
      imgID
      title
      description
      passengers
      extras
      cover
      fees
      price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vehicle not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicle }: CellSuccessProps<FindVehicleById>) => {
  return <Vehicle vehicle={vehicle} />
}
