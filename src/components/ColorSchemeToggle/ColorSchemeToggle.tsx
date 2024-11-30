import { IconBolt, IconBoltOff, IconBorderRadius } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import styles from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <>
      {colorScheme === 'light' ? (
        <IconBolt className={styles.colorSchemeToggle} onClick={() => setColorScheme('dark')} />
      ) : (
        <IconBoltOff className={styles.colorSchemeToggle} onClick={() => setColorScheme('light')} />
      )}
    </>
  );
}
