import { IconBolt, IconBoltOff } from '@tabler/icons-react';
import { Group, useMantineColorScheme } from '@mantine/core';
import styles from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      {colorScheme === 'light' ? (
        <IconBolt className={styles.colorSchemeToggle} onClick={() => setColorScheme('dark')} />
      ) : (
        <IconBoltOff className={styles.colorSchemeToggle} onClick={() => setColorScheme('light')} />
      )}
    </Group>
  );
}
