import type { EditVehicleById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import VehicleForm from 'src/components/Vehicle/VehicleForm'

export const QUERY = gql`
  query EditVehicleById($id: Int!) {
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
const UPDATE_VEHICLE_MUTATION = gql`
  mutation UpdateVehicleMutation($id: Int!, $input: UpdateVehicleInput!) {
    updateVehicle(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vehicle }: CellSuccessProps<EditVehicleById>) => {
  const [updateVehicle, { loading, error }] = useMutation(
    UPDATE_VEHICLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicle updated')
        navigate(routes.vehicles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateVehicle({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vehicle {vehicle.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VehicleForm
          vehicle={vehicle}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
