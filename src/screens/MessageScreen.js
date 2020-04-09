import React from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity } from 'react-native';
import HomeData from "../json/Home.json";

export default function MessageScreen({navigation}) {
  return (
      <View style ={styles.container}>
          <View style = {styles.headerStyle}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    style={styles.iconStyle18}
                    source={{uri:HomeData.Icon[0].Angel}}
                />
            </TouchableOpacity>
            <Text style={styles.HeaderTitleStyle}>Direct</Text>
            <View style={styles.HeaderRightStyle}>
               <Image
                    style={styles.iconStyle24}
                    source={{uri:HomeData.Icon[0].Video}}
                />
                <Image
                    style={styles.iconEditStyle}
                    source={{uri:HomeData.Icon[0].Edit}}
                /> 
            </View>
        </View>
        <View style={styles.SearchBoxAreaStyle}>
            <View style={styles.SearchBoxStyle}>
                <Image
                    style={styles.iconStyle18}
                    source={{uri:HomeData.Icon[0].Search}}
                />
                <Text style={styles.SearchTextStyle}>搜尋</Text>
            </View>
        </View>
        <View>
                    <Image
                    style={styles.Photo}
                    source={{uri:HomeData.MessageDetail[3].PersonUrl}}
                    />
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
        alignItems:'center',
        height:60,
        paddingTop:20,
        paddingLeft:8,
        paddingRight:12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.2 },
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
      iconEditStyle:{
        width:24,
        height:24,
        marginLeft:20
      },
      HeaderTitleStyle:{
        fontWeight:'600',
        fontSize:16,
        marginLeft:60
      },
      HeaderRightStyle:{
          flexDirection:'row',
      },
      SearchBoxAreaStyle:{
          flexDirection:'row',
          height:50,
          justifyContent:'center',
          alignItems:'center'
      },
      SearchBoxStyle: {
          width:350,
          height:32,
          backgroundColor:"#E6E6E6",
          borderRadius:8,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          paddingLeft:10,
      },
      SearchTextStyle:{
          marginLeft:6,
          color:'#858585'
      },
      Photo:{
          width:50,
          height:50,
          borderRadius:50
      }
});
