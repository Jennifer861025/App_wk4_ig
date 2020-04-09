import React from 'react';
import { StyleSheet, Text, View, Image ,ScrollView } from 'react-native';
import HomeData from "../json/Home.json";

export default function PostDetail({Post}) {
  return (
    <ScrollView>
        <View style={styles.PostContainerStyle}>
            <View style={styles.PostHeaderStyle}>
                <View style={styles.PersonDetailStyle}>
                    <Image
                    style={styles.PersonImageStyle}
                    source={{uri:Post.PersonUrl}}
                    />
                    <Text style={styles.PersonIdStyle}>
                        {Post.PersonId}
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
                source={{uri:Post.PhotoUrl}}
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
                    style={styles.iconMessageStyle}
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
                <Text>{Post.HeartNumber}</Text>
            </View>
            <View style={styles.ContentStyle}>
                <Text style={styles.PersonIdStyle}>
                    {Post.PersonId}
                </Text>
                <Text>{Post.Content}</Text>
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
  iconMessageStyle: {
    width:25,
    height:25,
    marginTop:2,
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
    paddingBottom:12,
  },
  PostHeaderStyle: {
    height:50,
    justifyContent:"space-between",
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:6,
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
