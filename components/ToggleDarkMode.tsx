import React from 'react';
import { useColorMode, Switch } from 'native-base';

export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode === 'light'}
      onToggle={toggleColorMode}
      aria-label={
        colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
      }
    />
  );
}
