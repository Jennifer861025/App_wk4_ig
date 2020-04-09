import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeData from "../json/Home.json";

export default function HomeScreen({navigation}) {
  return (
    <View style ={styles.container}>
      <View style = {styles.header}>
        <Image
          style={styles.iconStyle}
          source={{uri:HomeData.header[0].CameraUrl}}
        />
        <Image
          style={styles.InstagramStyle}
          source={{uri:HomeData.header[0].InstagramUrl}}
        />
        <Image
          style={styles.iconStyle}
          source={{uri:HomeData.header[0].MessageUrl}}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-start',
    height:60,
    paddingTop:28,
    paddingLeft:15,
    paddingRight:15
  },
  iconStyle: {
    width:24,
    height:24,
  },
  InstagramStyle:{
    width:100,
    height:28,
  }
});
