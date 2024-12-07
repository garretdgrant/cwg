import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';

export const useCustomSubmit = (form: any, notificationStyle: any) => {
  const navigate = useNavigate();

  const customSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = form.validate();
    if (!validation.hasErrors) {
      const formData = new FormData(event.currentTarget);
      try {
        await fetch('/', {
          method: 'POST',
          body: formData,
        });
        notifications.show({
          color: 'green',
          title: 'Message Sent',
          message: 'Your message has been sent, we will contact you soon :)',
          classNames: notificationStyle,
          position: 'top-center',
          pos: 'fixed',
        });
        form.reset();
        navigate('/', { replace: true });
      } catch (error) {
        notifications.show({
          color: 'red',
          title: 'Submission Error',
          message: 'There was a problem submitting the form. Please try again.',
          position: 'top-center',
          classNames: notificationStyle,
        });
      }
    } else {
      notifications.show({
        color: 'red',
        title: 'Message Failed',
        message: 'Please correct errors and send again :(',
        position: 'top-center',
        classNames: notificationStyle,
      });
    }
  };

  return customSubmit;
};
