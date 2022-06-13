import { StackScreenProps } from "@react-navigation/stack";
import React from "react";

import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const ScreenPage1 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title} >Screen page 1</Text>

            <Button
                title="Go to page 2"
                onPress={() => navigation.navigate('ScreenPage2')}
            />
            <Text style={{
                marginVertical: 20,
                fontSize: 20
            }}>Navegar con argumentos</Text>

            <TouchableOpacity
                style={{
                    ...styles.buttonBig,
                    backgroundColor: '#F799F3'
                }}
                onPress={() => navigation.navigate('PersonScreen', {
                    id: 1,
                    name: 'Walter'
                })}
            >
                <Text style={{ ...styles.buttonBigText }}>Walter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...styles.buttonBig,
                    backgroundColor: '#F799F3'
                }}
                onPress={() => navigation.navigate('PersonScreen', {
                    id: 2,
                    name: 'America'
                })}
            >
                <Text style={{ ...styles.buttonBigText }}>America</Text>
            </TouchableOpacity>

        </View>
    )
}  // Fin de la funcion ScreenPage1

export default ScreenPage1;