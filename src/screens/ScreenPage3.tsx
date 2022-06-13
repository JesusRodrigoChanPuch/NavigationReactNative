import React from "react";
import { View, Text, Button } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
interface Props extends StackScreenProps<any, any>{};

export const ScreenPage3 = ({navigation}:Props) => {
    return (
        <View>
            <Text>Pagina 3 </Text>
            <Button title="Regresar" onPress={()=> navigation.pop()} />
            <Button title="Ir a pagina 1" onPress={()=> navigation.popToTop()} />
        </View>
    );
};