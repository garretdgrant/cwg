import {
  Button,
  Container,
  Group,
  Image,
  NativeSelect,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContactIconsList } from './ContactIcons';
import pattern from './polygon.svg';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', subject: '', message: '' },
    validate: {
      name: (value: string) => (value.length < 3 ? 'Name must have at least 3 letters' : null),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value: string) =>
        value.length < 3 ? 'Subject must have at least 3 letters' : null,
      message: (value: string) =>
        value.length < 25 ? 'Message must have at least 3 letters' : null,
    },
  });

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
            name="contact" // Must match the hidden form's name
            method="POST"
            data-netlify="true" // Enables Netlify Forms
            netlify-honeypot="bot-field" // Optional: Adds a honeypot field for spam protection
            onSubmit={form.onSubmit(form.validate)}

          >
            {/* Hidden input for form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field */}
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
                  name="name" // Must match hidden form
                  required
                  key={form.key('name')}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label="Your email"
                  placeholder="hello@mantine.dev"
                  name="email" // Must match hidden form
                  required
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <NativeSelect
                mt="md"
                name="hear"
                label="How did you hear about us?"
                key={form.key('hear')}
                {...form.getInputProps('here')}
                data={[
                  {
                    group: 'Online',
                    items: [
                      { label: 'other', value: 'other' },
                      { label: 'Instagram', value: 'instagram' },
                      { label: 'Facebook', value: 'facebook' },
                      { label: 'Web Search (google, bing, etc)', value: 'web' },
                    ],
                  },
                  {
                    group: 'Referral',
                    items: [
                      { label: 'Referral', value: 'referral' },
                      { label: 'other', value: 'other' },
                    ],
                  },
                ]}
              />

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                name="subject" // Must match hidden form
                required
                key={form.key('subject')}
                {...form.getInputProps('subject')}
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                name="message" // Must match hidden form
                required
                key={form.key('message')}
                {...form.getInputProps('message')}
              />

              {/* reCAPTCHA Widget (Optional) */}
              {/* Uncomment the following line if you're using reCAPTCHA */}
              {/* <div data-netlify-recaptcha="true"></div> */}

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
