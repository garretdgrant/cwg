import { IconCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import EmailModal from '../EmailModal/EmailModal';
import image from './image.svg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  const navigate = useNavigate();
  return (
    <Container size="xl" className={classes.outterContainer}>
      <Container className={classes.container} size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Designing <span className={classes.highlight}>Modern</span> <br /> Web Solutions for
              <br />
              Your Business
              {/* A <span className={classes.highlight}>modern</span> React <br /> components library */}
            </Title>
            <Text c="dimmed" mt="md">
              We build custom, high-performing websites tailored to your business needs - no
              shortcuts, no bs - just results-driven solutions you can count on.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>No Templates, No Shortcuts </b> – We build 100% hand-coded websites from scratch,
                delivering superior performance, unmatched flexibility, and tailored designs that
                align perfectly with your business goals—no WordPress or page builders in sight.
              </List.Item>
              <List.Item>
                <b>Optimized for Performance and SEO</b> – Our custom-built websites are fast,
                responsive, and built with SEO best practices in mind, helping you rank higher on
                Google and attract the customers you deserve.
              </List.Item>
              <List.Item>
                <b>Stress-Free Website Management</b> – Your monthly plan includes secure AWS
                hosting, ongoing maintenance, and unlimited edits, so your website stays fast,
                secure, and always up-to-date without any extra costs or headaches.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                onClick={() => navigate('/contact')}
                radius="xl"
                size="md"
                className={classes.control}
              >
                Get started
              </Button>
              <EmailModal />
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </Container>
  );
}
