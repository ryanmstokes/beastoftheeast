import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import VehicleForm from 'src/components/Vehicle/VehicleForm'

const CREATE_VEHICLE_MUTATION = gql`
  mutation CreateVehicleMutation($input: CreateVehicleInput!) {
    createVehicle(input: $input) {
      id
    }
  }
`

const NewVehicle = () => {
  const [createVehicle, { loading, error }] = useMutation(
    CREATE_VEHICLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Vehicle created')
        navigate(routes.vehicles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createVehicle({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Vehicle</h2>
      </header>
      <div className="rw-segment-main">
        <VehicleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewVehicle
