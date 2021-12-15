import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../assets/colors'

const Card = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.rating} Stars</Text>
            <Text>{props.name}</Text>
            <Text>{props.time} Minutes</Text>
            <Text>{props.description}</Text>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 10
    }
})
