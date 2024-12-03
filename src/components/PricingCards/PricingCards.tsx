import { IconBrandAws, IconCookie, IconDeviceIpadCheck, IconGauge } from '@tabler/icons-react';
import {
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import classes from './PricingCards.module.css';

const featureData = [
  {
    title: 'Lightning-Fast performance',
    description:
      'Our custom-built websites are optimized for speed, ensuring your customers enjoy fast-loading pages that boost engagement and conversions.',
    icon: IconGauge,
  },
  {
    title: 'Monthly Plan',
    description:
      'Your website will look stunning and function perfectly on any device, ensuring a seamless experience for mobile, tablet, and desktop users.',
    icon: IconDeviceIpadCheck,
  },
  {
    title: 'Top-Tier Security',
    description:
      'Built on AWS, your website benefits from enterprise-level security and safeguards to protect your data and customer information.',
    icon: IconBrandAws,
  },
];

export function PricingCards() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const features = featureData.map((feature, index) => {
    const colorMode = index === 1 ? 'light' : 'dark';
    return (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={50} stroke={2} color={theme.colors.blue[3]} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
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
