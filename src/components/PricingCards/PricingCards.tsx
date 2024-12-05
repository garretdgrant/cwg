import { IconCalendar, IconCheck, IconDatabaseCog, IconPackages, IconX } from '@tabler/icons-react';
import {
  Button,
  ButtonGroup,
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

const basicServices = [
  { title: 'Design and Development', included: true },
  { title: '5 Pages Included', included: true },
];

const allBundleServices = [
  { title: 'Design and Development', included: false },
  { title: '5 Pages Included', included: false },
];

const monthlyServices = [
  { title: 'Design and Development', included: false },
  { title: '5 Pages Included', included: false },
];

const webAppServices = [
  { title: 'Design and Development', included: false },
  { title: '5 Pages Included', included: false },
];


const featureData = [
  {
    title: 'All in Bundle',
    services: [...basicServices, ...allBundleServices],
    icon: IconPackages,
    pricing: {price: '$4000', type: '+$25/mo Hosting'},
    button: <Button  size='lg'>Get Started</Button>
  },
  {
    title: 'Monthly Plan',
    services: [...basicServices, ...monthlyServices],
    icon: IconCalendar,
    pricing: {price: '$200', type: 'Per Month'},
    button: <Button size='lg'>Get Started</Button>
  },
  {
    title: 'Custom Web App',
    services: [...basicServices, ...webAppServices],
    icon: IconDatabaseCog,
    pricing: {price: '$8k', type: 'Starting'},
    button: <Button size='lg'>Get Started</Button>
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
        </Group>
        <Divider my={'lg'} mx={'md'} />
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
        <Divider mt={'lg'} mb={'lg'} />
        <Group justify='flex-start' gap={'xs'} p={'xs'} >
          <Text fw={500} className={classes.cardTitle} >
            {feature.pricing.price}
          </Text>
          <Text className={classes.cardPrice}>
            {feature.pricing.type}
          </Text>
        </Group>
        <Group justify='center'>
          {feature.button}
        </Group>
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
