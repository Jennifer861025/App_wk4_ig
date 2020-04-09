import React from 'react';
import { StyleSheet, Text, View, Image ,FlatList,TouchableOpacity} from 'react-native';
import HomeData from "../json/Home.json";
import PostDetailJs from "../components/PostDetail"

export default function HomeScreen({navigation}) {
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
            onPress={() => navigation.navigate('Message')}
        >
          <Image
            style={styles.iconStyle24}
            source={{uri:HomeData.header[0].MessageUrl}}
          />
        </TouchableOpacity>
      </View>
      {/* <PostDetailJs/> */}
      <FlatList
        data={HomeData.PostDetail}
        renderItem={({ item }) => 
        <PostDetailJs 
          Post={item}       
        />}
        keyExtractor={item => item.PersonId}
      />
      <View style={styles.HomeFooterStyle}>
        <Image
          style={styles.iconStyle24}
          source={{uri:HomeData.Icon[0].Home}}
        />
        <Image
          style={styles.iconStyle24}
          source={{uri:HomeData.Icon[0].Search}}
        />
        <Image
          style={styles.iconStyle24}
          source={{uri:HomeData.Icon[0].Add}}
        />
        <Image
          style={styles.iconStyle24}
          source={{uri:HomeData.Icon[0].Heart}}
        />
        <Image
          style={styles.iconStyle30}
          source={{uri:HomeData.Icon[0].Person}}
        />
      </View>
    </View>
  );
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
  InstagramStyle:{
    width:100,
    height:28,
  },
  HomeFooterStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
    paddingLeft:15,
    paddingRight:15,
    borderTopWidth:0.5,
    borderTopColor:"#E6E6E6"
  }
});
