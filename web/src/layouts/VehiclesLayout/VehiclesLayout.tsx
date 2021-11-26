import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type VehicleLayoutProps = {
  children: React.ReactNode
}

const VehiclesLayout = ({ children }: VehicleLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.vehicles()}
            className="rw-link"
          >
            Vehicles
          </Link>
        </h1>
        <Link
          to={routes.newVehicle()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Vehicle
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default VehiclesLayout
