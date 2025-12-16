import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#4d4c4cff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        cardForm: {
            backgroundColor: '#c9c9c9ff',
            alignItems: 'center',
            width: '90%',
            paddingHorizontal: 10,
            paddingVertical: 40,
            borderRadius: 10
        },
        title: {
            fontSize: 28,
            fontWeight: 800,
            paddingHorizontal: 20,
            marginBottom: 30,
            borderBottomWidth: 1,
            borderColor: '#fff',
            color: '#fff'
        },
        input: {
            width: '80%',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            marginVertical: 5
        },
        buttonsContainer: {
            gap: 10
        },
        buttons: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#a10303ff',
            alignItems: 'center'
        },
        buttonsText: {
            color: '#fff'
        }
    }
);