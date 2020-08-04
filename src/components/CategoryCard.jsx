import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { GlobalStyles } from "../styles/globalStyles";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress";
// import foodImage from "../styles/globalImages";
import { CategoryImages } from "../styles/globalImages";

class CategoryCard extends Component {
  openMenu = () => {
    // this.navigation.openDrawer();
  };

  render() {
    return (
      <>
        <FlatList
          data={CategoryImages.category}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={this.GetListItem.bind(this, item.p_title)}
            >
              <View style={GlobalStyles.container}>
                <Image
                  source={{ uri: item.categoryUrl }}
                  indicator={ProgressBar}
                  indicatorProps={{
                    size: 50,
                    borderWidth: 0,
                    color: "rgba(150, 150, 150, 1)",
                    unfilledColor: "rgba(200, 200, 200, 0.2)",
                  }}
                  style={{
                    marginLeft: 17,
                    marginRight: 8,
                    width: 174,
                    height: 160,
                    margin: 4,
                  }}
                />
              </View>
              <TouchableOpacity>
              <Text style={GlobalStyles.cardText}>Category</Text>
                {/* <Text style={GlobalStyles.cardText}>Add to Cart</Text> */}
              </TouchableOpacity>
              
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </>
    );
  }
}
export default CategoryCard;