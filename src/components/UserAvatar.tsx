import { Image,StyleSheet } from 'react-native'
import React from 'react'


const UserAvatar = () => {
  return (
    <Image style={styles.avatar} source={require("../assets/images/avatar.png")} />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
    avatar:
    {
        height:32,
        width:32,
        borderRadius:16,
    }
})