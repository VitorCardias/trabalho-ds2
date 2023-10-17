import { View, Text, TouchableOpacity } from 'react-native';

export default function Ocorrence({ data }){

    const navigation = useNavigation();

    function handlePress(data) {
        navigation.navigate("Details", { data: data });
    }
    

    return (

        <View>
            <View>
                <Text>{data.Titulo}</Text>
                <Text>{data.Data}</Text>
            </View>

            <Text>{data.Descrição}</Text>

            <View>
                <View>
                    <Text>Categoria</Text>
                    <Text>{data.Categoria}</Text>
                </View>
                <View>
                    <Text>Nivel de Risco</Text>
                    <Text>{data.nivelderisco}</Text>
                </View>
                <View>
                    <Text>Status</Text>
                    <Text>{data.Preventivo}</Text>
                </View>
            </View>
            <Text>Cidade: {data.cidade}</Text>
            <TouchableOpacity onPress={handlePress(data)}>
                <Text>Ver Detalhes</Text>
            </TouchableOpacity>
        </View>

    )
}