import { jsx, Box, Button } from 'theme-ui'
import { wrap, modal, btn } from 'src/components/form/forms/img-upload/styles'
import NewImage from 'src/components/Image/NewImage'
const ImgFormModal = ({ passImgData, toggleShowImgForm }) => {
  return (
    <Box sx={wrap}>
      <Box sx={modal}>
        <Button type="button" sx={btn} onClick={() => toggleShowImgForm(false)}>
          X
        </Button>
        <NewImage passImgData={passImgData} location="stay" />
      </Box>
    </Box>
  )
}

export default ImgFormModal
