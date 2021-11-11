import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>  


{/* Início do heaader */}
<View style={estilo.header}>

  <View style={estilo.perfil}>
<Image source ={{uri:"https://upload.wikimedia.org/wikipedia/commons/a/af/Tio_Douglas_Perfil.png"}} style={estilo.imgperfil}/>
  </View>


  <View style={estilo.titulo}>
    <Text style={estilo.nome}>Thiago Silva Campos</Text>
    <Text style={estilo.descricao}>Programador</Text>
</View>

<View style={estilo.pesquisa}>
<Image source={{uri:"https://us.123rf.com/450wm/jovanas/jovanas1602/jovanas160200890/52030754-search-icon-lupa-simple.jpg?ver=6"}} style={estilo.imgpesquisa}/>
</View>

</View>
     {/* Fim do header */}

<ScrollView horizontal={false}>

{/* Início dos Stories */}
<View style={estilo.stories}>
    <Text style={estilo.titulostories}>
      Stories
    </Text>

<ScrollView horizontal={true} style={estilo.scrollstories}>
  <View>
    <Text style={estilo.blackbox}>Live</Text>
    <Image source={{uri:"https://media.istockphoto.com/photos/a-dirt-road-and-the-path-to-the-infinite-of-the-soul-picture-id1202445369?k=20&m=1202445369&s=612x612&w=0&h=YVxTJKjHxK-ZCj0-GLysqJL0-JXHu4QGpbQm-ZSkfKA="}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Savannah</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>

  </View>

  <View>
    <Text style={estilo.redbox}>Premiere</Text>
    <Image source={{uri:"https://media.istockphoto.com/photos/single-tree-on-the-tuscan-hills-picture-id181134604?k=20&m=181134604&s=612x612&w=0&h=lXb1hoYz9SC4bXgciByTemzf6jHyXSpn58HkLLVLS9A="}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Cooper</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>
  </View>

  <View>
  <Text style={estilo.blackbox}>Live</Text>
    <Image source={{uri:"https://media.istockphoto.com/photos/gold-fields-under-morning-sun-picture-id657210074?k=20&m=657210074&s=612x612&w=0&h=8tCprjS4vDvwstiiVWoITbmEeiRgCuEI1fuIkGUFl_o="}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Howard</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>
  </View>

  <View>
  <Text style={estilo.blackbox}>Live</Text>
    <Image source={{uri:"https://media.istockphoto.com/photos/grumari-beach-on-the-west-side-of-rio-de-janeiro-picture-id1315216381?k=20&m=1315216381&s=612x612&w=0&h=CB3Qn6Wqo_CwU9tSEY0PG8e_wkTDncBp9aWi3Xn9rEk="}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Black Hat</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>
  </View>

  <View>
  <Text style={estilo.blackbox}>Live</Text>
    <Image source={{uri:"https://media.istockphoto.com/photos/early-morning-country-road-in-french-picardie-near-boulogne-and-picture-id1266782505?k=20&m=1266782505&s=612x612&w=0&h=5DeR0adMGXj0fbkdAtVeJ2FrHgNS-l8tm4bburmfe0k="}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Black Hat Man</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>
  </View>

</ScrollView>


</View>
{/* Fim dos Stories */}

{/* Início do Trending */}
<View style={estilo.trending}>

<View style={estilo.cxtitulo}>
    <Text style={estilo.trendingtitulo}>
      Trending
    </Text>
    <Image source={require("./assets/more.png")}style={estilo.trendingmore}/>
  </View>

<View style={estilo.cxtrendingdetalhe}>
  <View>
  <Image source={{uri:"https://skydiveseven-ojyavpbz3irxqcupp4.netdna-ssl.com/wp-content/uploads/2018/10/prendas-natal-2018-salto-paraquedas-2.jpg"}} style={estilo.detalheimg}/>
  <Text style={estilo.detalhelike}>
    Like
  </Text>

  <View style={estilo.trendingusuario}>
    <Image source={{uri:"https://img.a.transfermarkt.technology/portrait/big/291963-1526044700.jpg?lm=1"}} style={estilo.trendingusuarioimg}/>
    <View>
      <Text style={estilo.trendingusuariotitulo}>Fernando Miguel</Text>
      <Text style={estilo.trendingusuariosub}>2 minutos atrás</Text>
    </View>
  </View>

<Text style={estilo.trendingobs}>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente quas itaque nemo labore neque pariatur amet consequatur at aut! Explicabo perferendis rem est minus odit architecto animi, libero necessitatibus.

</Text>

  </View>

</View>


</View>
{/* fim do Trending */}


{/* Todos os elementos devem ficar acima do ScrollView */}
</ScrollView>
    </View>
  );
}


