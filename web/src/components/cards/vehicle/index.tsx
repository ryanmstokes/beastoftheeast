/** @jsx jsx */
import { jsx, Flex, Heading, Paragraph, Button } from 'theme-ui'
import { User, Check } from 'css.gg'
import ClientImageCell from 'src/components/ClientImageCell'

const Vehicle = ({
  imgID,
  title,
  description,
  passengers,
  extras,
  cover,
  fees,
  price,
}) => {
  return (
    <Flex sx={{ flexDirection: 'column', mb: 5, width: '100%' }}>
      <Flex sx={{ width: '100%' }}>
        <ClientImageCell id={imgID} />
      </Flex>
      <Flex sx={{ mt: 4, alignSelf: 'start', flexDirection: 'column' }}>
        <Flex>
          <Flex sx={{ pr: 4, pl: 3, flexDirection: 'column' }}>
            <Heading>{title}</Heading>
            <Paragraph>{description}</Paragraph>
            <Flex
              sx={{ mt: 3, ml: 2, display: ['none', 'none', 'none', 'flex'] }}
            >
              <Flex sx={{ alignItems: 'center' }}>
                <User style={{ '--ggs': 1.7, marginRight: '7px' }} />
              </Flex>
              <Flex>
                &nbsp;
                <Heading variant="paragraph">x {passengers} passengers</Heading>
              </Flex>
            </Flex>
          </Flex>
          <Flex sx={{ flexDirection: 'column', minWidth: '300px' }}>
            <Flex
              sx={{ mt: 0, ml: 2, display: ['flex', 'flex', 'flex', 'none'] }}
            >
              <Flex sx={{ alignItems: 'center' }}>
                <User style={{ '--ggs': 1.7, marginRight: '7px' }} />
              </Flex>
              <Flex>
                &nbsp;
                <Heading variant="paragraph">x {passengers} passengers</Heading>
              </Flex>
            </Flex>
            <Flex sx={{ mt: 3 }}>
              <Check style={{ '--ggs': 2, marginRight: '10px' }} /> BIke and
              {extras}
            </Flex>
            <Flex sx={{ mt: 3 }}>
              <Check style={{ '--ggs': 2, marginRight: '10px' }} /> Full
              {fees}
            </Flex>
            <Flex sx={{ mt: 3 }}>
              <Check style={{ '--ggs': 2, marginRight: '10px' }} /> {cover}
            </Flex>
            <Flex sx={{ mt: 3 }}>
              <Heading>£{price}(*inc VAT)</Heading>
            </Flex>
            <Flex sx={{ mt: 3 }}>
              <Button>Book Now</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Vehicle
