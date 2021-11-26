import type { FindVehicles } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Vehicles from 'src/components/Vehicle/Vehicles'

export const QUERY = gql`
  query FindVehicles {
    vehicles {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vehicles yet. '}
      <Link to={routes.newVehicle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicles }: CellSuccessProps<FindVehicles>) => {
  return <Vehicles vehicles={vehicles} />
}
