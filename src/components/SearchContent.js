import {Image, TouchableOpacity, View} from "react-native";

const searchData = [
  {
    id: 0,
    images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ],
  },

  {
    id: 1,
    images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
      require('../../assets/images/post12.jpeg'),
    ],
  },

  {
    id: 2,
    images: [
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
      require('../../assets/images/post15.jpeg'),
    ],
  },
];

const SearchContent = ({getData}) => {
  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
            }}>
            {data.images.map((imageData, imageIndex) => {
              return (
                <TouchableOpacity
                  key={imageIndex}
                  onPressIn={() => getData(imageData)}
                  onPressOut={() => getData(null)}
                  style={{
                    paddingBottom: 2,
                    width: '33.3%',
                  }}>
                  <Image
                    source={imageData}
                    style={{
                      width: '100%',
                      height: 150,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
