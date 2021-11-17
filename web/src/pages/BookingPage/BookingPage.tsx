import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BookingPage = () => {
  return (
    <>
      <MetaTags
        title="Booking"
        // description="Booking description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>BookingPage</h1>
      <p>
        Find me in <code>./web/src/pages/BookingPage/BookingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>booking</code>, link to me with `
        <Link to={routes.booking()}>Booking</Link>`
      </p>
    </>
  )
}

export default BookingPage
