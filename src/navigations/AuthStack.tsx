import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../screens/authScreens/LoginScreen';
import SignUpForm from '../screens/authScreens/SignUpForm';
import SignUpHome from '../screens/authScreens/SignUpHome';
import CompleteRegisteration from '../screens/authScreens/CompleteRegisteration';
import UpdatePassword from '../screens/authScreens/UpdatePassword';
import ForgetPassword from '../screens/authScreens/ForgetPassword';
import MagicLink from '../screens/authScreens/MagicLink';


import RouteNames from '../screens/RouteNames';
const stack = createNativeStackNavigator()


const AuthStack: React.FC = () => {
    return (
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name={RouteNames.LoginScreen} component={LoginScreen} />
            <stack.Screen name={RouteNames.SignUpHome} component={SignUpHome} />
            <stack.Screen name={RouteNames.SignUpForm} component={SignUpForm} />
            <stack.Screen name={RouteNames.CompleteRegisteration} component={CompleteRegisteration} />
            <stack.Screen name={RouteNames.ForgetPassword} component={ForgetPassword} />
            <stack.Screen name={RouteNames.UpdatePassword} component={UpdatePassword} />
            <stack.Screen name={RouteNames.MagicLink} component={MagicLink} />
        </stack.Navigator>
    )
}

export default AuthStack;