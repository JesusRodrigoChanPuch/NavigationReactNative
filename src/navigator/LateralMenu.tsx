import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/AppTheme';
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
    return (
        <Drawer.Navigator
            drawerContent={ (props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNavigator" options={{title: 'Home'}} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView  >
            {/* Avatar */}
            <View style={styles.skinContainer}>
                <Image source={require('../resources/img/rem.jpg')} style={styles.Skin} />
            </View>
            {/* Options Menu */}
            <View style={styles.containerMenu}>
                {/* 1 */}
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={ () => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.buttonText}>Navigation uwu</Text>
                </TouchableOpacity>
                {/* 2 */}
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={ () => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}