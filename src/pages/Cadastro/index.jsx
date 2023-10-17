import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { Input } from 'react-native-elements';
import Cabecalho from '../../assets/CabecalhoCadastro.png'



export default function Cadastro(){

    const navigation = useNavigation();

    function GoToLogin(){
        navigation.navigate('Login')
    }

    return(
        <View>
            <ScrollView>
                <View>
                    <Image source={Cabecalho}/>
                    <Text>Criar Conta</Text>
                    <Text>Insira os seus dados</Text>
                </View>

                <Text>Nome Completo</Text>
                <Input placeholder="DIGITE SEU NOME"/>

                <Text>E-mail</Text>
                <Input placeholder="DIGITE SEU E-MAIL"/>

                <Text>CPF</Text>
                <Input placeholder="DIGITE SEU CPF"/>

                <Text>Data de Nascimento</Text>
                <Input placeholder="DIGITE SUA DATA DE NASCIMENTO"/>

                <Text>Cidade</Text>
                <Input placeholder="DIGITE SUA CIDADE"/>

                <Text>Senha</Text>
                <Input placeholder="DIGITE SUA SENHA"/>

                <Button title="Cadastrar"/>

                <View>

                    <Text>Já possui uma conta</Text>
                    <TouchableOpacity onPress={GoToLogin}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}