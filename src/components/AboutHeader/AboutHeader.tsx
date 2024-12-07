import { Container, Image, Text } from '@mantine/core';
import image from './abstract-banner.svg';
import classes from './AboutHeader.module.css';

function AboutHeader() {
  return (
    <Container
      pos="relative"
      display="flex"
      style={{ margin: 0, paddingTop: '1rem', justifyContent: 'center', alignItems: 'center' }}
      size="sm"
      miw="100%"
    >
      <Text className={classes.title}>ABOUT US</Text>
      <Image className={classes.image} src={image} />
    </Container>
  );
}

export default AboutHeader;
