import { Image ,Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ActivityPrevious = ({data}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = React.useState(data.follow);

  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          width: '100%',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.push('FriendsProfile', {
            name: data.name,
            profileImage: data.profileImage,
            follow: data.follow,
            post: data.posts,
            followers: data.followers,
            following: data.following,
          })}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '64%',
          }}
        >
          <Image
            source={data.profileImage}
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold'
            }}
          >
            {data.name}
            <Text style={{fontWeight: 'light'}}>
              의 사진 및 동영상을 보려면 팔로우하세요.
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFollow(!follow)}
          style={{
            width: follow ? 72 : 68
          }}
        >
          <View
            style={{
              width: '100%',
              height: 30,
              borderRadius: 5,
              backgroundColor: follow ? null : '#3493d9',
              borderWidth: follow ? 1 : 0,
              borderColor: follow ? '#DEDEDE' : null,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: follow ? 'black' : 'white',
              }}
            >
              {follow ? '팔로우' : '팔로잉'}
            </Text>

          </View>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ActivityPrevious;
