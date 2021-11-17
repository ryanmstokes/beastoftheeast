import EditBookingCell from 'src/components/Booking/EditBookingCell'

type BookingPageProps = {
  id: number
}

const EditBookingPage = ({ id }: BookingPageProps) => {
  return <EditBookingCell id={id} />
}

export default EditBookingPage
