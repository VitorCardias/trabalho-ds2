import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useState, useContext } from 'react';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

import { ActivityIndicator } from 'react-native';

import LogoInicial from '../../assets/login.jpeg'

import { AuthContext } from '../../contexts/auth'

export default function Login(){

    const { singIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function GoToCadastro(){
        navigation.navigate('Cadastro')
    }
    function GoToInicio(){
        navigation.navigate('Inicio')
    }

    function handleLogin() {
        Login(email, password);
    }

    return(
        <View style={styles.container}>

            <Image source={LogoInicial}/>

            <Text>E-mail</Text>
            <Input
                placeholder="DIGITE O SEU E-MAIL"
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />

            <Text>Senha</Text>
            <Input
                placeholder="DIGITE A SUA SENHA"
                value={password}
                onChangeText={(text) => setPassword(text.toLowerCase())}
            />

            <Button 
                title="Login"
                onPress={GoToInicio}
            />

            <TouchableOpacity onPress={handleLogin}>
                
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF" />
                    ) : (
                        <Text>Acessar</Text>
                    )
                }

            </TouchableOpacity>

            <TouchableOpacity onPress={GoToCadastro}>
                <Text>Criar nova conta</Text>
            </TouchableOpacity>

        </View>
    )
}