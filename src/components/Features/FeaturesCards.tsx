import {
  IconBrandAws,
  IconCloudLock,
  IconDeviceIpadCheck,
  IconGauge,
  IconLocation,
  IconTimeline,
  IconUserCode,
} from '@tabler/icons-react';
import { Card, Container, Image, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import rain from './rect.svg';
import classes from './FeaturesCards.module.css';

const featureData = [
  {
    title: 'Lightning-Fast performance',
    description:
      'Our custom-built websites are optimized for speed, ensuring your customers enjoy fast-loading pages that boost engagement and conversions.',
    icon: IconGauge,
  },
  {
    title: 'Mobile First Design',
    description:
      'Your website will look stunning and function perfectly on any device, ensuring a seamless experience for mobile, tablet, and desktop users.',
    icon: IconDeviceIpadCheck,
  },
  {
    title: 'Top-Tier Security',
    description:
      'Your website benefits from enterprise-level security and safeguards to protect your data and customer information.',
    icon: IconCloudLock,
  },
  {
    title: 'SEO Optimization',
    description:
      'Boost your website’s visibility on search engines with built-in SEO best practices, ensuring your business ranks higher and reaches the right audience.',
    icon: IconTimeline,
  },
  {
    title: ' Stress-Free Maintenance',
    description:
      'We handle all website updates and upkeep, so you can focus on growing your business without worrying about downtime or technical issues. This includes unlimited edits on our monthly plan!',
    icon: IconUserCode,
  },
  {
    title: 'US-Based Development',
    description:
      'Professional US-based team, ensuring clear communication, timely support, and quality you can trust.',
    icon: IconLocation,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = featureData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container className={classes.outterContainer}>
      <Image src={rain} className={classes.rain} />
      <Image src={rain} className={classes.rain2} />

      <Container size="lg" py="xl">
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Websites That{' '}
          <Text
            variant="gradient"
            gradient={{ from: 'rgba(69, 255, 236, 1)', to: 'rgba(0, 143, 232, 1)', deg: 90 }}
            className={classes.highlight}
          >
            Work
          </Text>{' '}
          as Hard as You Do
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Custom-built websites designed for speed, security, and seamless usability. We’ll handle
          the tech, so you can focus on growing your business.
        </Text>
        <SimpleGrid className={classes.grid} cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    </Container>
  );
}
