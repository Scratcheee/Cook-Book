import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { colors } from "../assets/colors";
import Card from "../components/Card";

const MainScreen = () => {
  const data = {
    recipe: [
      {
        id: 1,
        name: "Spaghetti with Tomato Sauce",
        time: 20,
        rating: 4,
        description: "A super-quick spaghetti recipe with tomato sauce",
      },
      {
        id: 2,
        name: "Toast Hawaii",
        time: 20,
        rating: 4,
        description: "A super-quick toast recipe with pineapple",
      },
      {
        id: 3,
        name: "Classic Hamburger",
        time: 20,
        rating: 4,
        description: "A super-quick hamburger recipe",
      },
      {
        id: 4,
        name: "Spaghetti with Tomato Sauce",
        time: 20,
        rating: 4,
        description: "A super-quick spaghetti recipe with tomato sauce",
      },
      {
        id: 5,
        name: "Toast Hawaii",
        time: 20,
        rating: 4,
        description: "A super-quick toast recipe with pineapple",
      },
      {
        id: 6,
        name: "Classic Hamburger",
        time: 20,
        rating: 4,
        description: "A super-quick hamburger recipe",
      },
      {
        id: 7,
        name: "Spaghetti with Tomato Sauce",
        time: 20,
        rating: 4,
        description: "A super-quick spaghetti recipe with tomato sauce",
      },
      {
        id: 8,
        name: "Toast Hawaii",
        time: 20,
        rating: 4,
        description: "A super-quick toast recipe with pineapple",
      },
      {
        id: 9,
        name: "Classic Hamburger",
        time: 20,
        rating: 4,
        description: "A super-quick hamburger recipe",
      },
    ],
  };

  return (
    <View>
      <FlatList
      style={styles.container}
        data={data.recipe}
        renderItem={(item) => (
          <Card
            key={item.item.id}
            name={item.item.name}
            time={item.item.time}
            rating={item.item.rating}
            description={item.item.description}
          />
        )}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },

});
