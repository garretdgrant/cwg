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
      <Image className={classes.pattern} src={pattern} pos="absolute" w="100%" />
      <Paper shadow="xl" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts} style={{ position: 'relative' }}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form
            className={classes.form}
            name="contact" // Unique form name
            method="POST"
            data-netlify="true" // Enables Netlify Forms
            netlify-honeypot="bot-field" // Optional: Adds a honeypot field for spam protection
            action="/thank-you" // Redirect after successful submission
          >
            {/* Hidden input for form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field (optional) */}
            <p style={{ display: 'none' }}>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <Text fz="lg" fw={700} className={classes.title}>
              Let’s Build Something Amazing Together!
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput
                  label="Your name"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  name="email"
                  required
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                name="subject"
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                name="message" // Added name attribute
                required
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
