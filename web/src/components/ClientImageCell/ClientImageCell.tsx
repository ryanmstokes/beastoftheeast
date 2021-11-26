import type { FindImageQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindImageQuery($id: Int!) {
    image: image(id: $id) {
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ image }: CellSuccessProps<FindImageQuery>) => {
  console.log(image)
  return (
    <img
      src={image.url}
      alt="mygreat image"
      style={{ display: 'flex', width: '100%' }}
    />
  )
}
