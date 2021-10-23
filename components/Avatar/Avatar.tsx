import React from "react"
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base"
export const UserAvatar = () => {
  return (
      <Avatar
        bg="amber.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
        }}
      >
        AK
      </Avatar>
  )
}
