import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
import ImageCell from 'src/components/Image/ImageCell'

import { QUERY } from 'src/components/Vehicle/VehiclesCell'

const DELETE_VEHICLE_MUTATION = gql`
  mutation DeleteVehicleMutation($id: Int!) {
    deleteVehicle(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const VehiclesList = ({ vehicles }) => {
  const [deleteVehicle] = useMutation(DELETE_VEHICLE_MUTATION, {
    onCompleted: () => {
      toast.success('Vehicle deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vehicle ' + id + '?')) {
      deleteVehicle({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Img src</th>
            <th>Title</th>
            <th>Description</th>
            <th>Passengers</th>
            <th>Extras</th>
            <th>Cover</th>
            <th>Fees</th>
            <th>Price</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{truncate(vehicle.id)}</td>
              <td>
                <ImageCell id={vehicle.imgID} />
              </td>
              <td>{truncate(vehicle.title)}</td>
              <td>{truncate(vehicle.description)}</td>
              <td>{truncate(vehicle.passengers)}</td>
              <td>{truncate(vehicle.extras)}</td>
              <td>{truncate(vehicle.cover)}</td>
              <td>{truncate(vehicle.fees)}</td>
              <td>{truncate(vehicle.price)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.vehicle({ id: vehicle.id })}
                    title={'Show vehicle ' + vehicle.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editVehicle({ id: vehicle.id })}
                    title={'Edit vehicle ' + vehicle.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete vehicle ' + vehicle.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(vehicle.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VehiclesList
