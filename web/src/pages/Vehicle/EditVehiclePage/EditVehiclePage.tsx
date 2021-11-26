import EditVehicleCell from 'src/components/Vehicle/EditVehicleCell'

type VehiclePageProps = {
  id: number
}

const EditVehiclePage = ({ id }: VehiclePageProps) => {
  return <EditVehicleCell id={id} />
}

export default EditVehiclePage
