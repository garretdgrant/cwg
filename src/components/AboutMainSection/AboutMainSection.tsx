import { IconCheck } from '@tabler/icons-react';
import {
  Button,
  Container,
  Divider,
  Group,
  Box,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import HStackImages from '../HStackImages/HStackImages';
import garret from './garret.png';
import tahoe from './lake-tahoe-winter.jpg';
import classes from './AboutMainSection.module.css';
import { useNavigateToTop } from '@/hooks/useNavigateToTop';

export function AboutMainSection() {
  const navigate = useNavigateToTop()
  return (
    <Container className={classes.outter}>
      <Box className={classes.title}>
      <Title>Empowering Businesses</Title>
      <Title>with Affordable</Title>
      <Title>
        <span className={classes.highlight}>High-Quality</span> Websites
      </Title>
      </Box>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Paper component="section" radius={'xl'} shadow="xl" className={classes.paper} withBorder>
            <Text fw={'bold'} mt="md">
              Hi, my name is Garret, and I am the founder and lead engineer of El Dorado County Web
              Design. I’m proud to bring my experience as a professional software engineer and my
              education from UCLA back to my roots in El Dorado County, where I was born and raised.
              <br />
              <Divider />I started this web design business because I saw a need in our community.
              Many small businesses either couldn’t afford the steep upfront costs of a
              professionally built website or ended up with something that didn’t truly represent
              the quality of their work. My goal is to change that. With my $200/month{' '}
              <span className={classes.highlight}>all-inclusive plan</span>, I’ve made it possible
              for small businesses to get a beautiful, high-performing website without the upfront
              expense. This plan covers everything—website design, SEO optimization, hosting,
              maintenance, and more. It’s the full package, designed to help your business grow and
              thrive online.
              <br />
              <Divider />
              But this isn’t just about building websites; it’s about building relationships. I work
              closely with my clients to create a website that we can all be proud of—one that
              reflects their unique brand and helps them stand out in their market. Together, we’ll
              craft a website that not only looks great but also performs well, helping your
              business get ranked on Google and reach more customers.
              <br />
              <Divider />
              Whether you’re just starting out or looking to revamp your online presence, I’m here
              to help. Let’s create something amazing together and take your business to the next
              level.
            </Text>
          </Paper>
        </div>
        <HStackImages imageLeft={garret} imageRight={tahoe} />
      </div>
      <Group display={'flex'} justify='center'>
            <Button onClick={() => navigate('/contact')} variant='gradient' radius="sm" size="xl" className={classes.control}>
              Get started
            </Button>
      </Group>
    </Container>
  );
}
