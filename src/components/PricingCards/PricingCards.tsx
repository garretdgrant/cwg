import { IconCalendar, IconCheck, IconDatabaseCog, IconPackages, IconX } from '@tabler/icons-react';
import {
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  SimpleGrid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useNavigateToTop } from '@/hooks/useNavigateToTop';
import classes from './PricingCards.module.css';

const services = [
  { title: 'service', included: true },
  { title: 'service', included: true },
  { title: 'service', included: false },
];

const featureData = [
  {
    title: 'All in Bundle',
    services,
    icon: IconPackages,
    price: '$4000 one time'
  },
  {
    title: 'Monthly Plan',
    services,
    icon: IconCalendar,
    price: '$200 per Month'
  },
  {
    title: 'Custom Web App',
    services,
    icon: IconDatabaseCog,
    price: 'Contact'
  },
];

export function PricingCards() {
  const theme = useMantineTheme();
  const navigate = useNavigateToTop();
  const features = featureData.map((feature, index) => {
    return (
      <Card
        onClick={() => navigate('/contact')}
        key={feature.title}
        shadow="md"
        radius="md"
        className={classes.card}
        padding="xl"
      >
        <Group display={'flex'} w={'100%'} justify="space-between">
          <feature.icon size={50} stroke={2} color={theme.colors.blue[3]} />
          {index === 1 ? (
            <Button className={classes.valueBadge} size="lg" disabled>
              BEST VALUE!
            </Button>
          ) : null}
        </Group>
        <Group display={'flex'} className={classes.titleContainer}>
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            {feature.title}
          </Text>
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            {feature.price}
          </Text>
        </Group>
        <Divider mb={'1rem'} />
        <Flex direction="column">
          {feature.services.map((service) => {
            return (
              <Flex direction="row" align="center" justify="space-between">
                <Text className={classes.description}>{service.title}</Text>
                {service.included ? (
                  <IconCheck color="green" stroke={2} size={20} />
                ) : (
                  <IconX color="red" stroke={2} size={20} />
                )}
              </Flex>
            );
          })}
        </Flex>
      </Card>
    );
  });

  return (
    <Container className={classes.outter} size="lg" py="xl">
      <SimpleGrid className={classes.grid} cols={{ base: 1, md: 3 }} spacing="md" mt={2}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
