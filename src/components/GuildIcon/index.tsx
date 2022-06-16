import React from 'react';
import { Image } from 'react-native'
import { styles } from "./styles";

type Props = {
  uri:string;
}

export function GuildIcon({uri }: Props) {

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode='cover'
    />
  )
}