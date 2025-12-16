import { View, Text } from 'react-native';

import { styles } from './style';

function Card({children}){
    return(
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

function CardTitle({children}){
    return(
        <Text style={styles.cardTitle}>
            {children}
        </Text>
    )
}

function CardContent({children}){
    return(
        <View style={styles.cardContent}>
            {children}
        </View>
    )
}

export{
    Card,
    CardTitle,
    CardContent
};