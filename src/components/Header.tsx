import React from "react";

import {View, Text} from 'react-native'

interface Props{
    name: string
    type: string
}

const Header:React.FC<Props>=(props)=>{
    return(
        <View className="flex-row  items-center gap-x-5 border-b-2 h-28 p-2 border-b-gray-400">
            <View  className="flex-row self-end">
<Text className="text-3xl font-bold text-black m-3">Hey</Text>
<Text className="text-3xl font-bold text-orange-400 m-3 ml-0">{props.name}</Text>

            </View>
<Text className="text-xl font-bold text-gray-500 self-end m-5"  >{props.type}</Text>
        </View>
    )
}
export default Header