import React, { useState } from 'react';
import { View,Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState('0')

  const appointments=[
    {
      id:'1',
      guild:{
        id:'1',
        name:'Lendários',
        icon:null,
        owner:true,
      },
      category:'1',
      date:'22/06 às 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id:'2',
      guild:{
        id:'2',
        name:'Lendários',
        icon:null,
        owner:true,
      },
      category:'1',
      date:'22/06 às 20:40h',
      description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.header} >
        <Profile />
        <ButtonAdd />
      </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader 
            title='Partidas agendadas'
            subtitle='Total 6'
          />
          <FlatList 
            data={appointments}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
            ItemSeparatorComponent={()=><ListDivider/>}
            renderItem={({item})=>(
              <Appointment data={item} />
            )}
          />
        </View>
    </View>
  )
}