import React from "react";
import { TouchableOpacity, Text,Image,View } from 'react-native'
import colors from "../config/colors";
interface Props {
    title: string
    onPress: () => void
    image?: string,
    color: string
    titleColor?: string


}



const Button: React.FC<Props> = (props) => {

    return (
        <TouchableOpacity
        style={{backgroundColor:props.color,elevation:5}}
            className="w-fit h-11 p-2 m-2 rounded-3xl justify-center"
            onPress={props.onPress}
        >
         {
props.image == undefined ? <Text
style={{color: props.titleColor?props.titleColor:'white' ,alignSelf:'center'}}
className="text-lg font-bold text-white">
    {props.title}
</Text> 
        :
        <View className="flex-row gap-8">

            <Image 
            source={{uri: props.image}}
            resizeMode='contain'
            className='rounded-full h-8 w-8 self-start'
            />
            <Text
            style={{color: props.titleColor?props.titleColor:'white'}}
            className="text-inherit font-bold text-white">
                {props.title}
            </Text>
          </View>
         }
         

                
        </TouchableOpacity>
    )
}
export default Button;