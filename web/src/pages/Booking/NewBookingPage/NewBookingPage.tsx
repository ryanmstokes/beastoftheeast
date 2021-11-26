import NewBooking from 'src/components/Booking/NewBooking'
import { jsx, Container, Heading, Paragraph, Flex} from 'theme-ui'
import { Calendar, Check, Pen } from 'css.gg'
import Vehicle from 'src/components/cards/vehicle'
import BookingVehiclesCell from 'src/components/BookingVehiclesCell/'

const NewBookingPage = ({client}) => {
const title = 'Step 1: Choose your van!'
const description = 'Choose the size of Campervan and which extras you would like'
const startDate = '17th Oct'
const endDate = '28th Oct'
const edit = 'Change'
  return (
    <Container sx={{ flexDirection: 'column' }}>
      <Flex sx={{justifyContent: 'space-between', flexWrap:['wrap', 'wrap', 'nowrap'], flexDirection: ['column', 'column','column',  'row'], width: 'full', mb:4 }}>
        <Flex sx={{ flexDirection: 'row' }}>
          <Flex sx={{ flexDirection: 'column' }}>
            <Flex sx={{mb:0}}>
              <Heading sx={{ mt: 4, mb:0 }}>{title}</Heading>
            </Flex>
            <Flex>
              <Paragraph  sx={{ml:[0,0,0,1], mt:0}}>
                {description}
              </Paragraph>
            </Flex>
          </Flex>
        </Flex>
        <Flex sx={{alignSelf: ['start','start','start','end'], mt:[3,3,3,0]}}>
          <Heading variant="paragraph">
            <Flex>
              <Calendar style={{marginTop: '4px', marginRight: '4px'}}/>{startDate} >
              <Calendar style={{marginTop: '4px', marginRight: '6px', marginLeft: '8px'}}/>{endDate}
            </Flex>
            </Heading>
            <Flex sx={{alignSelf:'center', ml: 3, mt: 2}}>
            (&nbsp;<Pen style={{'--ggs':0.7, marginTop: '6px', marginRight: '3px'}}/>{edit})
            </Flex>
        </Flex>
      </Flex>
      <BookingVehiclesCell/>
    </Container>
  )
}

export default NewBookingPage
