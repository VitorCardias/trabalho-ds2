import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import Inicio from "../pages/Inicio"

export default function StackRoutes(){

    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Login"
                options={{
                    title:"Tela Login"
                }}
                component={Login}
            />

            <AuthStack.Screen
                name="Cadastro"
                options={{
                    title:"Tela Cadastro"
                }}
                component={Cadastro}
            />
            <AuthStack.Screen
                name="Inicio"
                options={{
                    title:"Tela Ocorrências"
                }}
                component={Inicio}
            />
            <AuthStack.Screen
                name="CreateOcorrence"
                options={{
                    title:"Criar Ocorrência"
                }}
                component={Inicio}
            />
            <AuthStack.Screen
                name="DetailsOcorrence"
                options={{
                    title:"Ocorrências"
                }}
                component={Inicio}
            />
        
        </AuthStack.Navigator>

    )
}