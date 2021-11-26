import VehicleCell from 'src/components/Vehicle/VehicleCell'

type VehiclePageProps = {
  id: Int
}

const VehiclePage = ({ id }: VehiclePageProps) => {
  return <VehicleCell id={id} />
}

export default VehiclePage
