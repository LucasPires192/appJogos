import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        cardContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            borderColor: '#e40000ff',
            borderRadius: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginTop: 10
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: 800,
            borderBottomWidth: 1
        },
        cardContent: {
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        }
    }
)