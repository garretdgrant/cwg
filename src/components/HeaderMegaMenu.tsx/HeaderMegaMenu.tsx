import { IconApps, IconBook, IconChevronDown, IconCode, IconCoin } from '@tabler/icons-react';
import { NavLink, To, useNavigate } from 'react-router-dom';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './HeaderMegaMenu.module.css';

const servicesData = [
  {
    icon: IconCode,
    title: 'Web Design',
    description: `Beautiful, user-friendly websites tailored to your brand and goals.`,
    to: 'web-design',
  },
  {
    icon: IconApps,
    title: 'Full Web Applications',
    description: `Custom web apps built for performance, scalability, and your business needs.`,
    to: 'web-app',
  },
  {
    icon: IconBook,
    title: 'Seo',
    description: `Boost your visibility and rankings with proven SEO strategies.`,
    to: 'seo',
  },
];

const navLinkStyleReset = {
  textDecoration: 'none',
  color: 'inherit',
};

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const links = servicesData.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <NavLink onClick={closeDrawer} style={navLinkStyleReset} to={item.to}>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </NavLink>
      </Group>
    </UnstyledButton>
  ));

  const drawerClick = (path: To) => {
    navigate(path);
    closeDrawer();
  };

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Text fw={700} size="xl">
            CWG
          </Text>

          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink style={navLinkStyleReset} to={'/'} className={classes.link}>
              <Text className={classes.link}>Home</Text>
            </NavLink>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <NavLink to={'/services'} className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </NavLink>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Services</Text>
                  <Anchor onClick={() => navigate('/services')} fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Partner with us to build innovative solutions that bring your vision to
                        life.
                      </Text>
                    </div>
                    <Button onClick={() => navigate('/contact')} variant="default">
                      Get started
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <NavLink style={navLinkStyleReset} to={'/pricing'} className={classes.link}>
              <Text className={classes.link}>Pricing</Text>
            </NavLink>
            <NavLink style={navLinkStyleReset} to={'/'} className={classes.link}>
              <Text className={classes.link}>Contact</Text>
            </NavLink>
          </Group>

          <Group visibleFrom="sm">
            <ColorSchemeToggle />
            <Button>Get Started</Button>
          </Group>

          <Group hiddenFrom="sm">
            <ColorSchemeToggle />
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a onClick={() => drawerClick('/')} className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Services
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a onClick={() => drawerClick('/pricing')} className={classes.link}>
            Pricing
          </a>
          <a onClick={() => drawerClick('/contact')} className={classes.link}>
            Contact
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button onClick={() => drawerClick('/contact')}>Get Started</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
