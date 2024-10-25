import { View,Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is Settings Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    },
});

export default SettingsScreen;