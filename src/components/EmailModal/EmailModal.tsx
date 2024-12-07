import { Button, Group, Image, Modal, Stack, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import image from './image.svg';
import classes from './EmailModal.module.css';
import notificationStyle from './notifications.module.css';

function EmailModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      terms: true,
    },

    validate: {
      name: (val) => (val.length <= 3 ? 'Name should include at least 3 characters' : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  const validatedSubmit = () => {
    notifications.show({
      color: 'green',
      title: 'Message Sent',
      message: 'Your message has been sent, we will contact you soon :)',
      classNames: notificationStyle,
      position: 'top-center',
      pos: 'fixed',
    });
    form.reset();
    close();
  };

  const errorSubmit = () => {
    notifications.show({
      color: 'red',
      title: 'Message Failed',
      message: 'Please correct errors and send again :(',
      position: 'top-center',
      classNames: notificationStyle,
      pos: 'absolute',
    });
  };

  return (
    <>
      <Modal size="auto" opened={opened} onClose={close}>
        {/* Modal content */}
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Get One Month Free on Our Premium Web Plan!</Title>
            <Text fw={500} fz="lg" mb={5}>
              Join today and enjoy one month free of professional hosting, unlimited updates, and
              stress-free website management.
            </Text>
            <Text fz="sm" c="dimmed">
              Take your website to the next level with our all-inclusive premium plan. Enjoy secure
              hosting, unlimited edits, and ongoing maintenance tailored to your business needs.
              Sign up today and get your first one month completely free!
            </Text>

            {}
            <form
              name="email-modal" // Added Netlify form name
              method="POST" // Added for Netlify form submission
              data-netlify="true" // Enables Netlify Forms
              netlify-honeypot="bot-field" // Adds a honeypot field for spam prevention
              onSubmit={form.onSubmit(validatedSubmit, errorSubmit)} // Kept your original onSubmit handler
            >
              {/* Hidden input for Netlify form name */}
              <input type="hidden" name="form-name" value="email-modal" />

              {/* Honeypot field */}
              <p style={{ display: 'none' }}>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name" // Added 'name' attribute for Netlify
                  value={form.values.name}
                  onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                  radius="md"
                  error={form.errors.name}
                />

                <TextInput
                  required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  name="email" // Added 'name' attribute for Netlify
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                  error={form.errors.email}
                  radius="md"
                />
              </Stack>

              <Group justify="space-around" mt="xl">
                <Button type="submit" radius="xl">
                  Subscribe
                </Button>
              </Group>
            </form>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Modal>

      <Button variant="outline" onClick={open}>
        Discount Inside!
      </Button>
    </>
  );
}

export default EmailModal;
