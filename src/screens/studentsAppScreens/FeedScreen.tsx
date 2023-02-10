import React,{useContext, useState} from "react";
import { View, Text, SafeAreaView } from "react-native";
import Languages from "../../languages";
import LanguageContext from "../../languages/languageContext";
import { categories, messageData } from "./DummyData";




interface Props{
    navigation: any
}

const FeedScreen:React.FC<Props>=({navigation})=>{
    const contextState = useContext(LanguageContext);
    let language = 'en'
    let Strings=''
    if (contextState != null) {

        language = contextState.language
        Strings = Languages[language].texts
    }
    

    const[data,setData]=useState(messageData);
    const[catagories,setCatagories]=useState(categories);

    return(
        <SafeAreaView className="flex-1 justify-center">

<View className="flex-1 justify-center">
<View>
    <Text>This Is Feed</Text>
</View>
</View>
        </SafeAreaView>
    )
}

export default FeedScreen;