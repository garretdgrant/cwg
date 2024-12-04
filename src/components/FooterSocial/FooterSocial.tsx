import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import logo from '@/favicon.svg';
import { useNavigateToTop } from '@/hooks/useNavigateToTop';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  const navigate = useNavigateToTop();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <ActionIcon size="xl" bg="none">
            <Image src={logo} />
          </ActionIcon>
          <Text>El Dorado Web Design</Text>
        </Group>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
