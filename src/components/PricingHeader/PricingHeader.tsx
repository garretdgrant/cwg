import { Container, Text, Title } from '@mantine/core';
import { Dots } from './Dots';
import classes from './PricingHeader.module.css';

export function PricingHeader() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Plans &{' '}
          <Text component="span" className={classes.highlight} inherit>
            Pricing
          </Text>{' '}
          for any{' '}
          <Text component="span" className={classes.highlight} inherit>
            Budget
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Affordable plans for professional websites and custom web applications. Choose between
            one-time payment, monthly plans, or fully tailored solutions based on your unique
            requirements.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
