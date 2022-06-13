import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/AppTheme';
import { View, Text, Button } from 'react-native';
export const SettingsScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20,
        }}>
            <Text style={styles.title}>
                Settings Screen
            </Text>
        </View>
    )
}
