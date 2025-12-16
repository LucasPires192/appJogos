import { StyleSheet } from "react-native";
import { COLORS } from '../../styles/variables';

export const styles = StyleSheet.create(
    {
        cardContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            borderColor: COLORS.primary,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginTop: 10,
            backgroundColor: '#c9c9c9ff'
        },
        cardTitle: {
            fontSize: 24,
            fontWeight: 800,
            borderBottomWidth: 1
        },
        cardContent: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }
)