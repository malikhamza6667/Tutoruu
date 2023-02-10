import React, { useState } from "react";


import StudentDrawer from "./StudentDrawer";
import AuthStack from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack=createNativeStackNavigator();

const StudentStack:React.FC=()=>{
    const[user,setUser]=useState('user')
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
{
    user ?
      <stack.Screen name='StudentDrawer' component={StudentDrawer}/>
:
<stack.Screen name='AuthStack' component={AuthStack}/>
}
        </stack.Navigator>
    )
}
export default StudentStack