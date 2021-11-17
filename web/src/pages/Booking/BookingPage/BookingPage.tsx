import BookingCell from 'src/components/Booking/BookingCell'

type BookingPageProps = {
  id: Int
}

const BookingPage = ({ id }: BookingPageProps) => {
  return <BookingCell id={id} />
}

export default BookingPage
