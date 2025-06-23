import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { CircularLow } from './CircularLow'
import { CircularMedium } from './CircularMedium'
import { CircularHigh } from './CircularHigh'
import { vs, s } from 'react-native-size-matters'
interface props
{
    buttonpress: ()=>void
    currentSlide:number
}
const ElearningNext:FC<props> = ({currentSlide,buttonpress}) => {
 
    const handlebuttonstate= () =>
    {
        switch(currentSlide)
        {
            case 0:
                return <CircularLow />
                case 1:
                    return <CircularMedium />
                    case 2:
                        return <CircularHigh />
        }
    }
    return (
    <Pressable onPress={buttonpress} style={styles.container}>
        <View>
            {handlebuttonstate()}
        </View>
    </Pressable>
  )
}

export default ElearningNext

const styles = StyleSheet.create({
    container:
    {
        position:'absolute',
        top:vs(570),
        right:s(15),
    }
})