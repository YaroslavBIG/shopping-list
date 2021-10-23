import React from "react";
import { Center, Code, Heading, HStack, VStack, Text } from "native-base";
import NativeBaseIcon from "../NativeBaseIcon";

export const HomeScreen = () => (
  <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <NativeBaseIcon />
            <Heading size="lg">Welcome to NativeBase</Heading>
            <HStack space={2} alignItems="center">
              <Text>Edit</Text>
              <Code>App.tsx</Code>
              <Text>and save to reload.</Text>
            </HStack>
          </VStack>
        </Center>
)