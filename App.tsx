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
<Image source ={{uri:"https://lh3.googleusercontent.com/proxy/_o4mD_kOlH6PgrX9trvtsx6BA8hbKmvbyI-p7T2BzhKGHtktku2f-4V8b0RouUDrj1f2W8JjybdGwP_BtmI_AW--Z0jpdnbY07biya_1PVBoV4EpWZ_C27KOF6Ao2UOr"}} style={estilo.imgperfil}/>
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
    <Image source={{uri:"https://images.unsplash.com/photo-1591468069148-5cc79ed1caaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpc2FnZW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} style={estilo.imgstories}/>
    <View style={estilo.txticon}>
    <Text style={estilo.txt}>Black Hat Man</Text>
    <Image source={require("./assets/iconverifired.png")} style={estilo.icon}/>
    </View>
  </View>

</ScrollView>


</View>
{/* Fim dos Stories */}

    </View>
  );
}


