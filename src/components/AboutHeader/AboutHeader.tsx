import { Container, Image, Text } from '@mantine/core';
import image from './abstract-banner.svg';

function AboutHeader() {
  return (
    <Container
      pos={'relative'}
      display={'flex'}
      style={{ margin: 0, padding: 0, justifyContent: 'center', alignItems: 'center'}}
      size={'sm'}
      miw={'100%'}
      mih={'10vw'}
    >
      <Text>About Us</Text>
    </Container>
  );
}

export default AboutHeader;
