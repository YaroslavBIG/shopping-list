import React from "react"
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  useColorModeValue,
} from "native-base"

export function MainMenu() {
  return (
    <Box alignItems="flex-start">
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon color={useColorModeValue('coolGray.800', 'warmGray.50')} />
            </Pressable>
          )
        }}
      >
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  )
};
