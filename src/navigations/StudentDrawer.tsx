import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import RouteNames from "../screens/RouteNames";


import FeedScreen from "../screens/studentsAppScreens/FeedScreen";
import MarketPlace from "../screens/studentsAppScreens/MarketPlace";

const drawer= createDrawerNavigator()

const StudentDrawer:React.FC=()=>{
    return(
<drawer.Navigator>
    <drawer.Screen name={RouteNames.FeedScreen} component={FeedScreen}/>
    <drawer.Screen name={RouteNames.MarketPlace} component={MarketPlace}/>
</drawer.Navigator>
    )
}
export default StudentDrawer