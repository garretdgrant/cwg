import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Image,
  Modal,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { upperFirst, useDisclosure, useToggle } from '@mantine/hooks';
import image from './image.svg';
import classes from './EmailModal.module.css';

function EmailModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [type, toggle] = useToggle(['login', 'register']);
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

  return (
    <>
      <Modal size={'auto'} opened={opened} onClose={close}>
        {/* Modal content */}
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Get Two Months Free on Our Premium Web Plan!</Title>
            <Text fw={500} fz="lg" mb={5}>
              Join today and enjoy two months of professional hosting, unlimited updates, and
              stress-free website management—completely free.
            </Text>
            <Text fz="sm" c="dimmed">
              "Take your website to the next level with our all-inclusive premium plan. Enjoy secure
              hosting, unlimited edits, and ongoing maintenance tailored to your business needs.
              Sign up today and get your first two months completely free!
            </Text>

            {}
            <form onSubmit={form.onSubmit((e) => {
                console.log('Submitted the form bitches')
                console.log(JSON.stringify(e))
            })}>
              <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  value={form.values.name}
                  onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                  radius="md"
                />

                <TextInput
                  required
                  label="Email"
                  placeholder="hello@mantine.dev"
                  value={form.values.email}
                  onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                  error={form.errors.email && 'Invalid email'}
                  radius="md"
                />

                  <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
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
