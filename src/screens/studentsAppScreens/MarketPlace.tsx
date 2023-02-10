import React,{useState,useContext} from 'react'
import { SafeAreaView, TextInput, TouchableOpacity,Text, View,FlatList } from 'react-native'
import Header from '../../components/Header'

import { Input, Icon } from '@rneui/themed';
import { Button } from '@rneui/base';
import { Classes } from './DummyData';

import { AntDesign } from '@expo/vector-icons';
import colors from '../../config/colors';
import LanguageContext from '../../languages/languageContext';
import Languages from '../../languages';

const sessions=[
    {
        id:0,
        type: 'online',
        status:'awaiting comfirmation',
        time: "2.30 P.M",
        day: 'Monday',
        title: 'Macro Economics 135'
    }
]
interface Props{
    navigation: any
}
const MarketPlace:React.FC<Props>=({navigation})=>{
    const contextState = useContext(LanguageContext);
    let language = 'en'
    let Strings:any=''
    
    
    if (contextState != null) {

        language = contextState.language
        Strings = Languages[language].texts
    }
 const[classes,setClasses]=useState(Classes)
 const[backgroundEnabled,setBackgroundEnabled]=useState(0)
    const[newClass,setNewClass]=useState('')
    return(
<SafeAreaView className='flex-1 justify-center bg-white'>
    <View  className='flex-1 justify-evenlys'>
    <Header name='Ragnar' type='Student'/>
    <View className='flex-row w-fit justify-between items-center gap-x-4 h-12 m-5 p-3 rounded-full border'>

    <TextInput
    placeholder='Add Classes'
    value={newClass}
    onChangeText={(text)=>{setNewClass(text)}}
    />
    <TouchableOpacity
    //className='self-end'
    onPress={()=>{alert(newClass)}}
    >
    <AntDesign name="pluscircleo" size={20} color="black" />

    </TouchableOpacity>
    </View>
    <View>
        <FlatList
        data={classes}
        horizontal
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                onPress={()=>{setBackgroundEnabled(index)}}
                style={{backgroundColor: backgroundEnabled == index? colors.orange: colors.gray}}
                className='w-auto rounded-full  p-2 m-3 items-center '>
                    <Text className='text-sm'>{item.name}</Text>
                </TouchableOpacity>
            )
        }}
        keyExtractor={(item:{id:{toString: ()=> any}})=>{return  item.id.toString()}}
        />
        
    </View>
    <View className='m-3 justify-center' >
        <Text className='text-2xl text-center m-5'>{Strings.ST36}</Text>
        <FlatList
        data={sessions}
        renderItem={({item})=>{
            return(
              
                <View
                
                className=' justify-evenly p-4 rounded-3xl bg-slate-50 shadow-inner shadow-black'>
<View className='flex-row gap-10 justify-between'>
                    <Text className='text-sm font-bold text-justify  bg-orange-400 p-2 w-auto rounded-full' >{item.status}</Text>
                    <Text className='text-sm font-bold text-justify  w-auto' >{item.time}</Text>
    </View>
                    <Text className='text-sm font-bold text-justify '>{item.type}</Text>
                    <Text className='text-sm font-bold text-justify '>{item.day}</Text>
                    <Text className='text-sm font-bold text-justify '>{item.title}</Text>
                </View>
                  
            )
        }}
        keyExtractor={(item:{id:number})=>{return item.id}}
        
        />
        <TouchableOpacity className='self-center items-center m-3'>
        <Text className='text-lg text-orange-400'>{Strings.ST37}</Text>
        </TouchableOpacity>
    </View>

    </View>
</SafeAreaView>
    )

}
export default MarketPlace;