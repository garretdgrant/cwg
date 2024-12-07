import { IconCheck } from '@tabler/icons-react';
import { Container, Group, Image, List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import { ServiceProps } from '@/pages/ServicesPage';
import classes from './Service.module.css';

function Service({
  anchorId,
  title,
  info,
  detailTitle,
  detailContent,
  matters,
  img,
  imgClass,
  bottomContent,
  bottomTitle,
}: ServiceProps) {
  useScrollToAnchor();
  return (
    <Container id={anchorId} size="lg" className={classes.serviceContainer}>
      {/* Title Section */}
      <Group>
        <Title order={1} className={classes.serviceTitle}>
          {title}
        </Title>
      </Group>
      <Image src={img} className={imgClass} />

      {/* Service Info Section  */}
      <section className={classes.serviceSection}>
        <Text className={classes.serviceText}>{info}</Text>
      </section>

      {/* Custom Code Section */}
      <section className={classes.serviceSection}>
        <Title order={2} className={classes.serviceSubtitle}>
          {detailTitle}
        </Title>
        <Text className={classes.serviceText}>{detailContent}</Text>
      </section>

      {/* Why It Matters Section */}
      <section className={classes.serviceSection}>
        <Title order={3} className={classes.serviceSubtitle}>
          Why It Matters
        </Title>
        <List
          spacing="xs"
          c="white"
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          {matters.map((item) => (
            <List.Item key={item}>
              <Text fw="bold">{item.split(':')[0]}:</Text>
              {item.split(':')[1]}
            </List.Item>
          ))}
        </List>
      </section>

      {/* Additional Sections */}
      <SimpleGrid cols={1} className={classes.serviceGrid} spacing="lg">
        <section>
          <Title order={3} className={classes.serviceSubtitle}>
            {bottomTitle}
          </Title>
          <Text className={classes.serviceText}>{bottomContent}</Text>
        </section>
      </SimpleGrid>
    </Container>
  );
}

export default Service;
