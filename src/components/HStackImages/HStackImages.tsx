import { Container, Image } from '@mantine/core';
import classes from './HStackImages.module.css';

interface HStackImagesProps {
  imageLeft: string;
  imageRight: string;
}

function HStackImages({ imageLeft, imageRight }: HStackImagesProps) {
  return (
    <Container className={classes.imageContainer}>
      <Container className={classes.imageLeftWrapper}>
        <Image src={imageLeft} className={classes.imageLeft} />
      </Container>
      <Image src={imageRight} className={classes.imageRight} />
    </Container>
  );
}

export default HStackImages;
