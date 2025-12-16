import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c0c0c0ff'
    },
    input: {
        width: '80%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 5
    },
    error: {
        color: 'red'
    },
    buttonsContainer:{
        gap: 10
    },
    buttons: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#a10303ff',
        alignItems: 'center',
    },
    buttonsText:{
        color: '#fff'
    }
})