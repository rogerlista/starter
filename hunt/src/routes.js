import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/products';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#da552f',
        },
        headerTintColor: '#fff',
      },
    },
  ),
);

export default Routes;
