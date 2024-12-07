import { IconBrandInstagram, IconBrandLinkedin, IconBrandMeta } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import logo from '@/favicon.svg';
import { useNavigateToTop } from '@/hooks/useNavigateToTop';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  const navigate = useNavigateToTop();
  const socials = {
    linkedIn: 'https://www.linkedin.com/in/garret-d-grant/',
    instagram: 'https://www.instagram.com/garret.grant/',
    facebook: 'https://www.facebook.com/garret.d.grant',
  };
  const handleClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group onClick={() => navigate('/', 'smooth')} style={{ cursor: 'pointer' }}>
          <ActionIcon size="xl" bg="none">
            <Image src={logo} />
          </ActionIcon>
          <Text>El Dorado Web Design</Text>
        </Group>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon
            onClick={() => handleClick(socials.linkedIn)}
            size="xl"
            color="gray"
            variant="subtle"
          >
            <IconBrandLinkedin size={28} stroke={1.25} />
          </ActionIcon>
          <ActionIcon
            onClick={() => handleClick(socials.facebook)}
            size="xl"
            color="gray"
            variant="subtle"
          >
            <IconBrandMeta size={28} stroke={1.25} />
          </ActionIcon>
          <ActionIcon
            onClick={() => handleClick(socials.instagram)}
            size="xl"
            color="gray"
            variant="subtle"
          >
            <IconBrandInstagram size={28} stroke={1.25} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
