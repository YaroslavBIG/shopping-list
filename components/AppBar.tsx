import React from "react";
import { HStack, useColorMode } from "native-base";
import { UserAvatar } from "./Avatar/Avatar";
import { MainMenu } from "./Menu/Menu";
import { ToggleDarkMode } from "./ToggleDarkMode";

export function AppBar(){
   const { colorMode, toggleColorMode } = useColorMode();
   const bg = colorMode === 'dark' ? 'black' : 'white';
  return (
        <HStack bg={bg} p={3} maxW='100%' justifyContent='space-between' alignItems='center'>
            <MainMenu />
            <ToggleDarkMode />
            <UserAvatar />
        </HStack>
  )
}
