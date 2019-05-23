import { createMaterialTopTabNavigator } from 'react-navigation';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import SearchScreen from '../views/search/SearchScreen';
import ResultsScreen from '../views/results/ResultsScreen';
import DetailsScreen from '../views/details/DetailsScreen';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Search: SearchScreen,
    Results: ResultsScreen,
    Details: DetailsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      showIcon: true,
      style: {
        backgroundColor: 'red',
      },
      labelStyle: {
        fontSize: moderateScale(12),
      },
      iconStyle: {
        height: moderateScale(30),
        width: moderateScale(30),
      },
    },
  },
);

export default AppNavigator;
