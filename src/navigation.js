import React from "react";
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';


import Top from "./screens/Top";
import Login from "./screens/Login";
import Cart from "./screens/Cart";

const Navigator = createSwitchNavigator(
  {
    AuthLoading: Top,
    Auth: Login,
    App: Cart
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(Navigator);