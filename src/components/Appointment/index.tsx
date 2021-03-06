import React from 'react';
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from "./styles";
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/category';

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { theme } from '../../global/styles/theme';

export type GuildProps = {
  owner: boolean,
  name:string,
  id:string,
  icon:null,
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner,name } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.container}>
        <GuildIcon uri='https://github.com/LimaAle.png' />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {name}
            </Text>
            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={owner ? primary : on}
              />
              <Text style={[styles.player, { color: owner ? primary : on }]} >
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}