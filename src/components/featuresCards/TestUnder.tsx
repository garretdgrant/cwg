import { Container, Image } from "@mantine/core"
import classes from './FeaturesCards.module.css'
import rain from './rect2.svg'
export function TestUnder() {
  return (
    <Container p={0} className={classes.outterContainer}>
        <Image src={rain} className={classes.rain2} />
    </Container>
  )
}

