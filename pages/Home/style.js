import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/variables';

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
            backgroundColor: COLORS.background
        },
        image: {
            width: 150,
            height: 150,
            marginTop: 20
        },
        flatlist: {
            backgroundColor: COLORS.secondary,
            width: '95%',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 20
        },
        title: {
            fontSize: 28,
            fontWeight: 800,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#fff',
            color: COLORS.text
        },
        actionsColumn: {
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        floatingButton: {
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            backgroundColor: '#27ae60',
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
        },
        plusIcon: {
            color: COLORS.text,
            fontSize: 32,
            lineHeight: 36,
            marginBottom: 2,
        },
    }
)