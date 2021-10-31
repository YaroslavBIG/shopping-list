import React from 'react';
import {
  Square,
  Box,
  HStack,
  View,
  Text,
  Flex,
  theme,
  useColorModeValue,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { vh } from '../../utils/viewPortUnits';

export const HomeScreen = () => {
  const { colors } = theme;

  return (
    <View
      _dark={{ bg: 'coolGray.800' }}
      _light={{ bg: 'warmGray.50' }}
      minHeight={vh(100)}
    >
      <HStack
        space={5}
        alignItems="center"
        justifyContent="center"
        marginTop="10"
      >
        <Box>
          <Square size="lg" bg="primary.400">
            <Flex>
              <Text
                fontWeight="normal"
                fontSize="md"
                textAlign="center"
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'warmGray.50' }}
              >
                Список покупок
              </Text>
              <Box alignItems="center">
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={useColorModeValue(
                    colors.coolGray[800],
                    colors.warmGray[50],
                  )}
                  _dark={{ bg: 'coolGray.800' }}
                  _light={{ bg: 'warmGray.50' }}
                />
              </Box>
            </Flex>
          </Square>
        </Box>
        <Box>
          <Square size="lg" bg="primary.400">
            <Box
              _text={{
                fontWeight: 'bold',
                fontSize: 'lg',
                color: 'white',
              }}
            >
              +
            </Box>
          </Square>
        </Box>
        <Box>
          <Square size="lg" bg="primary.400">
            <Box
              _text={{
                fontWeight: 'bold',
                fontSize: 'lg',
                color: 'white',
              }}
            >
              +
            </Box>
          </Square>
        </Box>
      </HStack>
    </View>
  );
};
