import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ImageForm from 'src/components/Image/ImageForm'

const CREATE_IMAGE_MUTATION = gql`
  mutation CreateImageMutation($input: CreateImageInput!) {
    createImage(input: $input) {
      id
    }
  }
`

const NewImage = ({ passImgData, location }) => {
  const [createImage, { loading, error }] = useMutation(CREATE_IMAGE_MUTATION, {
    onCompleted: (data) => {
      toast.success('Image created')
      if (!location) {
        navigate(routes.images())
      } else {
        passImgData(data)
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createImage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Image</h2>
      </header>
      <div className="rw-segment-main">
        <ImageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewImage
