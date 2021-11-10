import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>  


<View style={estilo.header}>

  <View style={estilo.perfil}>
<Image source ={{uri:"https://lh3.googleusercontent.com/proxy/uS4UXt2azXqFZhUEM2bDiHYwgXG154jcogTVJnyUc1Ge2WKjCzvU8XiYZXexPN1e_UiYCEbqU4NNLEVqqZWknqbvIYLHhILn0v_1vG07zZP0tfVtECcFDfu5Flj53s9a"}} style={estilo.imgperfil}/>
  </View>


  <View style={estilo.titulo}>
    <Text style={estilo.nome}>Thiago Silva Campos</Text>
    <Text style={estilo.descricao}>Programador</Text>
</View>

<View style={estilo.pesquisa}>
<Image source={{uri:"https://us.123rf.com/450wm/jovanas/jovanas1602/jovanas160200890/52030754-search-icon-lupa-simple.jpg?ver=6"}} style={estilo.imgpesquisa}/>
</View>

</View>
      <StatusBar style="auto" />
    </View>
  );
}


