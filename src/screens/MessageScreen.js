import React from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native';
import HomeData from "../json/Home.json";

export default function MessageScreen({navigation}) {
  return (
      <View style ={styles.container}>
          <View style = {styles.headerStyle}>
            <Image
            style={styles.iconStyle24}
            source={{uri:HomeData.header[0].CameraUrl}}
            />
            <Image
            style={styles.InstagramStyle}
            source={{uri:HomeData.header[0].InstagramUrl}}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
            <Image
                style={styles.iconStyle24}
                source={{uri:HomeData.header[0].MessageUrl}}
            />
            </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex:1,
      },
      headerStyle: {
        backgroundColor:"#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-start',
        height:60,
        paddingTop:28,
        paddingLeft:12,
        paddingRight:12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
      },
      iconStyle30: {
        width:30,
        height:30,
      },
      iconStyle24: {
        width:24,
        height:24,
      },
      iconStyle20: {
        width:20,
        height:20,
      },
      iconStyle18: {
        width:18,
        height:18,
      },
      InstagramStyle:{
        width:100,
        height:28,
      },
});
