import { Center, Group, SimpleGrid, Title } from '@mantine/core';

interface ServiceProps {
  title: string;
}

function Service({ title }: ServiceProps) {
  return (
    <>
      <Group justify="center">
        <Title order={2}>{title}</Title>
      </Group>
      <SimpleGrid cols={2}>
        <Center>C1</Center>
        <Center>C2</Center>
      </SimpleGrid>
    </>
  );
}

export default Service;
