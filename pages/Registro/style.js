import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background
    },
    title: {
        fontSize: 28,
        fontWeight: 800,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#fff',
        color: COLORS.text,
        marginBottom: 30
    },
    formCard: {
        width: '90%',
        height: '50%',
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    inputGroup: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.text,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 5
    },
    error: {
        color: 'red'
    },
    buttonsContainer: {
        gap: 10
    },
    buttons: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#a10303ff',
        alignItems: 'center',
    },
    buttonsText: {
        color: '#fff'
    }
})