import { Button, Card, Row, Text } from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  image: string;
  title: string;
}

const MovieCard: FC<Props> = ({ title, image }) => (
  <Card cover css={{ w: 300, h: 400 }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5, bgBlur: '#ffffffff' }}>
      <Button flat auto rounded color='secondary'>
        <Text h2 weight='bold' color='white' css={{ textShadow: '4px 4px 4px solid black' }}>
          {title}
        </Text>
      </Button>
    </Card.Header>
    <Card.Body>
      <Card.Image src={image} height={400} width='100%' alt='Card example background' />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: 'absolute',
        bgBlur: '#ffffff',
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row justify='space-around'>
        <Button bordered auto rounded color='gradient'>
          <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
            12:00
          </Text>
        </Button>
        <Button bordered auto rounded color='gradient'>
          <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
            14:00
          </Text>
        </Button>
        <Button bordered auto rounded color='gradient'>
          <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
            20:00
          </Text>
        </Button>
      </Row>
    </Card.Footer>
  </Card>
);

export default MovieCard;
