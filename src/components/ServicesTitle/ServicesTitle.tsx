import { Title } from '@mantine/core';
import classes from './ServicesTitle.module.css';

function ServicesTitle() {
  return (
    <div className={classes.pageHeader}>
      <Title order={1} className={classes.pageTitle}>
        High-Performance Web Design
      </Title>
    </div>
  );
}

export default ServicesTitle;
