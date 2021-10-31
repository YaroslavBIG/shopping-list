/**
 * Using viewport units (vw, vh, vmin, vmax) with React Native
 * @params {Number} number
 * @example  const styles = StyleSheet.create({
                    Container: {
                      width: vmin(95),
                      height: vmax(70),
                      padding: vw(2.5),
                      margin: vh(5),
                    },
                    Font: {
                      fontSize: vw(3.75),
                    },
                  });
 * @returns {Number}
 */
import { Dimensions } from 'react-native';

export const vw = (number: number) =>
  Dimensions.get('window').width * (number / 100);

export const vh = (number: number) =>
  Dimensions.get('window').height * (number / 100);

export const vmin = (number: number) =>
  Math.min(
    Dimensions.get('window').width * (number / 100),
    Dimensions.get('window').height * (number / 100),
  );

export const vmax = (number: number) =>
  Math.max(
    Dimensions.get('window').width * (number / 100),
    Dimensions.get('window').height * (number / 100),
  );
