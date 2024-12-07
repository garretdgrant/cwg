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

const basicServices = [
  { title: 'Design and Development', included: true },
  { title: '5 Pages Included', included: true },
  { title: 'SEO Optimization', included: true },

];

const allBundleServices = [
  { title: '+$250 To Add a Blog', included: true },
  { title: '+$100 fee per Page After 5', included: true },
  { title: '+$50/mo Unlimited Edits', included: true },
  { title: '24/7 Support', included: false },
  { title: 'Lifetime Updates', included: false },
];

const monthlyServices = [
  { title: 'Hosting Included', included: true },
  { title: 'Unlimited Edits', included: true },
  { title: '24/7 Support', included: true },
  { title: 'Lifetime Updates', included: true },
  { title: '+$250 To Add a Blog', included: true },
  { title: '+$100 fee per Page After 5', included: true },
];

const webAppServices = [
  { title: 'Database Implementation', included: true },
  { title: 'API Integrations', included: true },
  { title: 'Responsive Design', included: true },
  { title: 'User Authentication and Security', included: true },
  { title: 'Admin Dashboard', included: true },
  { title: 'Third-Party Integrations', included: true },
  { title: 'Scalability Optimization', included: true },
  { title: 'SEO-Ready', included: true },
  { title: 'Performance Optimization', included: true },
  { title: 'Maintenance and Support', included: true },
  { title: 'At Cost Hosting fees', included: true },
  { title: 'Flexibility and Custiomization', included: true },

];

const featureData = [
  {
    title: 'All in Bundle',
    services: [...basicServices, ...allBundleServices],
    icon: IconPackages,
    pricing: { price: '$4000', type: '+$25/mo Hosting' },
  },
  {
    title: 'Monthly Plan',
    services: [...basicServices, ...monthlyServices],
    icon: IconCalendar,
    pricing: { price: '$200', type: 'Per Month' },
  },
  {
    title: 'Custom Web App',
    services: [...webAppServices],
    icon: IconDatabaseCog,
    pricing: { price: '$8k', type: 'Starting' },
  },
];

export function PricingCards() {
  const theme = useMantineTheme();
  const navigate = useNavigateToTop();
  const features = featureData.map((feature, index) => {
    return (
      <Card key={feature.title} className={classes.card} tabIndex={0}>
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
        <Group justify="center" gap={'xs'} p={'xs'}>
          <Text fw={500} className={classes.cardTitle}>
            {feature.pricing.price}
          </Text>
          <Text className={classes.cardPrice}>{feature.pricing.type}</Text>
        </Group>
        <Group className={classes.buttonContainer} justify="center">
          <Button onClick={() => navigate('/contact', 'instant')} size="md" variant="outline">
            Get Started
          </Button>
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
