// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import BookingsLayout from 'src/layouts/BookingsLayout'
import DefaultLayout from 'src/Layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BookingsLayout}>
        <Route path="/bookings/new" page={BookingNewBookingPage} name="newBooking" />
        <Route path="/bookings/{id:Int}/edit" page={BookingEditBookingPage} name="editBooking" />
        <Route path="/bookings/{id:Int}" page={BookingBookingPage} name="booking" />
        <Route path="/bookings" page={BookingBookingsPage} name="bookings" />
      </Set>
      <Route path="/booking" page={BookingPage} name="booking" />
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
