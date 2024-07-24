import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  Text, Dimensions,
} from "react-native";
import React from 'react';
import SearchInput from "../components/SearchInput";
import SearchContent from "../components/SearchContent";

const Search = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [image, setImage] = React.useState(null);

  const getData = img => {
    setImage(img);
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(52,52,52,0.8)',
          }}>
          <StatusBar backgroundColor={'#525252'} barStyle={'dark-content'} />

          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: '90%',
              height: 465,
              top: windowHeight / 6,
              left: windowWidth / 18,
              borderRadius: 15,
              zIndex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={image}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  paddingLeft: 8,
                }}>
                <Text style={{fontSize: 13, fontWeight: '600'}}>
                  친구 아이디
                </Text>
              </View>
            </View>
            <Image source={image} style={{width: '100%', height: '80%'}}/>
            <View
              style={{
                justifyContent: 'space-around',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 8,
              }}
            >

            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
