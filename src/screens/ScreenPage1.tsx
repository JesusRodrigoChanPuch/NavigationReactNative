
import React from "react";
import {Button, View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
const ScreenPage1 = ({navigation}) => {
    return (
        <View>
            <Text>Pagina 1 </Text>
            <Button title="Ir apagina 2" onPress={()=>navigation.navigate('ScreenPage2')}/>
        </View>
    );
    };  // Fin de la funcion ScreenPage1

    export default ScreenPage1;