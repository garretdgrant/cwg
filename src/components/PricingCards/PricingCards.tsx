import { IconBrandAws, IconCheck, IconDeviceIpadCheck, IconGauge } from '@tabler/icons-react';
import { Card, Container, Flex, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import classes from './PricingCards.module.css';

const services = ['service', 'service', 'service'];

const featureData = [
  {
    title: 'All in Bundle',
    services,
    icon: IconGauge,
  },
  {
    title: 'Monthly Plan',
    services,
    icon: IconDeviceIpadCheck,
  },
  {
    title: 'Custom Web App',
    services,
    icon: IconBrandAws,
  },
];

const valueBadge = (
  <Flex className={classes.valueBadge}>
    <Text className="">Most Popular!</Text>
  </Flex>
);

export function PricingCards() {
  const theme = useMantineTheme();
  const features = featureData.map((feature, index) => {
    return (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={50} stroke={2} color={theme.colors.blue[3]} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Flex direction="column">
          {feature.services.map((service) => {
            return (
              <Flex direction="row" align="center" justify="space-between">
                <Text className={classes.description}>{service}</Text>
                <IconCheck color="green" stroke={2} size={20} />
                {index === 1 ? valueBadge : null}
              </Flex>
            );
          })}
        </Flex>
      </Card>
    );
  });

  return (
    <Container size="lg" py="xl">
      <SimpleGrid className={classes.grid} cols={{ base: 1, md: 3 }} spacing="md" mt={2}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
