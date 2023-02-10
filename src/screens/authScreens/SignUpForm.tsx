import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Button'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import RouteNames from '../RouteNames'
import colors from '../../config/colors'
import { Picker } from '@react-native-picker/picker';

interface Props {
    navigation: any
}

const SignUpForm: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedUni, setSelectedUni] = useState('');

    const contextState = useContext(LanguageContext);
    let language = 'en'
    if (contextState != null) {

        language = contextState.language
    }
    const Strings = Languages[language].texts
    return (
        <SafeAreaView className='flex-1 justify-center bg-orange-500'>

            <View className='flex-1 justify-evenly'>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className='bg-orange-500'
                    />
                </View>
                <View>

                    <Text className='text-white text-2xl font-bold self-center'>
                        {Strings.ST25}
                    </Text>
                    <View className='bg-white p-2 m-4 justify-center rounded-xl'>
                        <Input
                            value={name}
                            title='Name'
                            placeholder='Enter Your Name'
                            onChangeText={(text) => { setName(text) }}
                        />
                        <Input
                            value={email}
                            title='Email'
                            placeholder='Enter Your Email'
                            onChangeText={(text) => { setEmail(text) }}
                        />
                        <View className='flex-row'>

                            <Input
                                value={userName}
                                title='User Name'
                                placeholder='Enter A UserName'
                                onChangeText={(text) => { setUserName(text) }}
                            />
                            <View className="h-13 bg-green  p-3 py-2 ">
                                <Text
                                    className="text-center text-sm text-black self-start"
                                >University</Text>
                                <View
                                    className="w-fit h-fit.5 p-1 m-1 border border-gray-300 rounded-3xl"
                                >
                                    <Picker
                                        selectedValue={selectedUni}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedUni(itemValue)
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>
                                </View
                                >
                            </View>

                        </View>

                        <Input
                            value={phoneNo}
                            title='Phone'
                            placeholder='Enter Your Phone No'
                            onChangeText={(text) => { setPhoneNo(text) }}

                        />
                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter A Password'
                            onChangeText={(text) => { setPassword(text) }}

                        />
                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Passowrd'
                            onChangeText={(text) => { setConfirmPassword(text) }}

                        />
                        <Button
                            color={colors.orange}
                            title='Create Account'
                            image='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-forward-icon-png-image_925823.jpg'
                            onPress={() => {
                                navigation.navigate(RouteNames.CompleteRegisteration, {
                                    selectedUni,
                                    phoneNo,
                                    userName,
                                })
                            }}
                        />

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text className='text-white text-lg  self-center'>
                            {Strings.ST29}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.LoginScreen) }}
                        >
                            <Text className='text-white text-lg border-b-2 border-white font-bold self-center'>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SignUpForm;