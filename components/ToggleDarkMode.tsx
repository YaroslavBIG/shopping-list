import React from "react";
import { HStack, useColorMode, Switch, NativeBaseProvider } from "native-base";

export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
  );
}