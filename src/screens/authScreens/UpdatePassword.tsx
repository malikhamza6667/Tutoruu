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

const UpdatePassword: React.FC<Props> = ({ navigation }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
                    <View className='self-center justify-center m-5 items-center'>

                        <Text className='text-white text-2xl text-center font-bold self-center'>
                            {Strings.ST32}
                        </Text>
                        <Text className='text-white text-lg text-center font-bold self-center'>
                            {Strings.ST33}
                        </Text>
                    </View>

                    <View className='bg-white m-4 p-5 justify-center rounded-xl'>

                        <Input
                            value={password}
                            title='Password'
                            placeholder='Enter Your Password'
                            onChangeText={(text) => { setPassword(text) }}
                            secureTextEntry
                        />
                        <Input
                            value={confirmPassword}
                            title='Confirm Password'
                            placeholder='Confirm Your Password'
                            onChangeText={(text) => { setConfirmPassword(text) }}
                            secureTextEntry
                        />
                        <Button
                            color={colors.orange}
                            title='Update Password'
                            onPress={() => { alert(password) }}
                        />


                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}
export default UpdatePassword;