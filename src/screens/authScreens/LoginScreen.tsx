import React, { useState, useContext } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Input from '../../components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/Button'
import Languages from '../../languages'
import LanguageContext from '../../languages/languageContext'

import { AntDesign } from '@expo/vector-icons';
import RouteNames from '../RouteNames'
import colors from '../../config/colors'

interface Props {
    navigation: any
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const contextState = useContext(LanguageContext);
    let language = 'en'
    if (contextState != null) {

        language = contextState.language
    }
    const Strings = Languages[language].texts
    return (
        <SafeAreaView className='flex-1 justify-center bg-orange-400'>

            <View className='flex-1 justify-evenly'>
                <StatusBar style='light' />
                <View className='self-center h-30'>
                    <Image
                        source={require('../../../assets/logo.jpg')}
                        resizeMode='contain'
                        className='bg-orange-400'
                    />
                </View>
                <View>

                    <Text className='text-white text-2xl font-bold self-center'>
                        {Strings.ST25}
                    </Text>
                    <View className='bg-white m-4 p-5 justify-center rounded-xl'>
                        <Input
                            value={email}
                            title='Email'
                            placeholder='Enter Your Email'
                            onChangeText={(text) => { setEmail(text) }}
                        />
                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter Your Password'
                            onChangeText={(text) => { setPassword(text) }}
                            secureTextEntry
                        />
                        <Button
                            color={colors.orange}
                            title='Login'
                            onPress={() => { alert(email + "    " + password) }}
                        />
                        <View className='justify-center  justify-items-center flex-row'>

                            <TouchableOpacity>
                                <Image
                                    source={require('./../../../assets/googlelogo.png')}
                                    resizeMode='contain'
                                    className='rounded-full h-12 w-12 m-2'
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require('./../../../assets/facebooklogo.png')}
                                    resizeMode='contain'
                                    className='rounded-full h-12 w-12 m-2'
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View className='flex-row justify-center items-center'>
                        <Text className='text-white text-lg  self-center'>
                            {Strings.ST26}
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(RouteNames.SignUpHome) }}
                        >
                            <Text className='text-white text-lg border-b-2 border-white font-bold self-center'>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity className='align-bottom justify-center items-center '
                    onPress={() => { navigation.navigate(RouteNames.ForgetPassword) }}
                >

                    <Text className='text-white text-lg  self-center'>
                        {Strings.ST27}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default LoginScreen;