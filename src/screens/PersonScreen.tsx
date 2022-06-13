import React, { useEffect } from "react";

import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';
import { RootStackParams } from '../navigator/StackNavigator';


//interface Props extends StackScreenProps<any, any>{};
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({route, navigation}: Props) => {
    const params = route.params;
    // Sobre escribir estilos
    useEffect( () => {
        navigation.setOptions({
            title: params.name
        })
    }, [])


    return(
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
