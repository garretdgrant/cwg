import {
  Button,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import pattern from './polygon.svg';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <Container className={classes.outter}>
      <Image className={classes.pattern} src={pattern} pos={'absolute'} w={'100%'} />
      <Paper shadow="xl" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ position: 'relative' }}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Let’s Build Something Amazing Together!
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Subject" placeholder="Subject" required />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
