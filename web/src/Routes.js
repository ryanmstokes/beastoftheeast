// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ImagesLayout from 'src/layouts/ImagesLayout'
import VehiclesLayout from 'src/layouts/VehiclesLayout'
import BookingsLayout from 'src/layouts/BookingsLayout'
import DefaultLayout from 'src/Layouts/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ImagesLayout} clieent="false">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />

        <Route path="/vehicles/new" page={VehicleNewVehiclePage} name="newVehicle" />
        <Route path="/vehicles/{id:Int}/edit" page={VehicleEditVehiclePage} name="editVehicle" />
        <Route path="/vehicles/{id:Int}" page={VehicleVehiclePage} name="vehicle" />
        <Route path="/vehicles" page={VehicleVehiclesPage} name="vehicles" />

        <Route path="/bookings/{id:Int}/edit" page={BookingEditBookingPage} name="editBooking" />
        <Route path="/bookings/{id:Int}" page={BookingBookingPage} name="booking" />
        <Route path="/bookings" page={BookingBookingsPage} name="bookings" />
      </Set>
      <Set client="true">
        <Route path="/booking" page={BookingPage} name="booking" />
      </Set>
      <Set wrap={DefaultLayout} theme="fixed">
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={DefaultLayout} theme="default">
        <Route path="/bookings/new" page={BookingNewBookingPage} name="newBooking" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
