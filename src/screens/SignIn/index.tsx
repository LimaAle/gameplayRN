import React from 'react'
import { View, Text, Image,StatusBar,Button } from 'react-native'
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIncon'
export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>
      <View style={styles.content} >
        <Text style={styles.title} >
          Organize{'\n'}
          Suas jogatinas{'\n'}
          facilmente
        </Text>
        <Text style={styles.subtitle} >
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7} />
      </View>
    </View>
  )
}