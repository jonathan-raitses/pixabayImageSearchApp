import { ScaledSheet } from 'react-native-size-matters';

const scaledStyles = ScaledSheet.create({
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '5@ms',
    paddingRight: '5@ms',
  },
  header: {
    color: 'black',
    fontSize: '20@ms',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default scaledStyles;
