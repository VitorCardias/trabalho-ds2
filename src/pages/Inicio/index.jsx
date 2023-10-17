import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEfffect } from 'react';
import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';
import Ocorrence from '../../components/ocorrenceList';
import Search from '../../components/Search';

import icon from '../../assets/HeaderTelaOcorrencias/IconMap.png'
import fundo from '../../assets/HeaderTelaOcorrencias/Fundo.png'
import Texto from '../../assets/HeaderTelaOcorrencias/Text.png'

export default function Inicio(){

    const [ocorrences, setOcorrence] = useState([]);
    const [filteredOcorrence, setFilteredOcorrences] = useState([]);
    
    const navigation = useNavigation();

    function createOcorrence(){
        navigation.navigate('Login')
    }

    const handleFilterChange = (filterText) => {
        if (filterText === '') {
            setFilteredOcorrences(ocorrences);
        } else {
          const filtered = users.filter((ocorrence) =>
          ocorrence.title.toLowerCase().includes(filterText.toLowerCase())
          );
          setFilteredOcorrences(filtered);
        }
    };

    

    return(
        <View>
            <View>
                <Image source={icon}/>
                <Image source={Texto}/>
                <Image source={fundo}/>
            </View>

            <TouchableOpacity>Nova Ocorrencia</TouchableOpacity>

            <View>

            <Search onFilterChange={handleFilterChange} />
            <Text>Ocorrencias</Text>

            <FlatList
            data={filteredOcorrence}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Ocorrence data={item} />}
            />

            </View>

            <Text>Inicio</Text>
        </View>
    )
}