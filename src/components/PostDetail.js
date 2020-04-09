import React from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';
import HomeData from "../json/Home.json";

export default function PostDetail() {
  return (
    <ScrollView>
        <View style={styles.PostContainerStyle}>
            <View style={styles.PostHeaderStyle}>
                <View style={styles.PersonDetailStyle}>
                    <Image
                    style={styles.PersonImageStyle}
                    source={{uri:HomeData.PostDetail[0].PersonUrl}}
                    />
                    <Text style={styles.PersonIdStyle}>
                        {HomeData.PostDetail[0].PersonId}
                    </Text>
                </View>
                <View>
                    <Image 
                    style={styles.iconStyle18}
                    source={{uri:HomeData.Icon[0].More}}
                    />
                </View>
            </View>
            <View>
            <Image
                style={styles.PhotoStyle}
                source={{uri:HomeData.PostDetail[0].PhotoUrl}}
            />
            </View>
            <View style={styles.AllofIconStyle}>
                <View style={styles.LeftIconStyle}>
                    <Image
                    style={styles.iconStyle24}
                    source={{uri:HomeData.Icon[0].Heart}}
                    />
                    <Image
                    style={styles.iconStyle20}
                    source={{uri:HomeData.Icon[0].Answer}}
                    />
                    <Image
                    style={styles.iconStyle24}
                    source={{uri:HomeData.Icon[0].Message}}
                    />
                </View>
                <View>
                    <Image
                    style={styles.iconStyle24}
                    source={{uri:HomeData.Icon[0].Tag}}
                    />
                </View>
            </View>
            <View style={styles.HeartNumberStyle}>
                <Text>{HomeData.PostDetail[0].HeartNumber}</Text>
            </View>
            <View style={styles.ContentStyle}>
                <Text style={styles.PersonIdStyle}>
                    {HomeData.PostDetail[0].PersonId}
                </Text>
                <Text>{HomeData.PostDetail[0].Content}</Text>
            </View>
        </View> 
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
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
  PostContainerStyle: {

  },
  PostHeaderStyle: {
    height:50,
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:12,
    paddingRight:18,
    paddingTop:2
  },
  PersonDetailStyle: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  PersonImageStyle: {
    width:28,
    height:28,
    marginRight:5
  },
  PersonIdStyle: {
    fontWeight:'600',
    marginRight:2
  },
  PhotoStyle: {
    height:320
  },
  AllofIconStyle: {
    height:45,
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:5,
    paddingRight:12,
  },
  LeftIconStyle:{
    width:100,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  HeartNumberStyle:{
      flexDirection:'row',
      height:25,
      justifyContent:'flex-start',
      alignItems:'center',
      paddingLeft:12,
  },
  ContentStyle:{
      flexDirection:'row',
      paddingLeft:12,
  }
});
