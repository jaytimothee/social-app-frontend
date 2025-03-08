import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChooseCityScreen = ({ navigation }) => {
  const cities = [
    {
      id: "1",
      name: "Los Angeles",
      image: require("./assets/cities/los-angeles.jpg"),
    },
    {
      id: "2",
      name: "New York",
      image: require("./assets/cities/new-york.jpg"),
    },
    { id: "3", name: "Seattle", image: require("./assets/cities/seattle.jpg") },
    { id: "4", name: "Chicago", image: require("./assets/cities/chicago.jpg") },
    { id: "5", name: "Dallas", image: require("./assets/cities/dallas.jpg") },
    { id: "6", name: "Miami", image: require("./assets/cities/miami.jpg") },
  ];

  const handleCitySelection = (city) => {
    alert(`You selected ${city}`);
    navigation.navigate("Home"); // Navigate to Home screen after city selection
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.header}>LET’S GO!</Text>
      <Text style={styles.title}>Choose your city</Text>

      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.cityList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cityCard}
            onPress={() => handleCitySelection(item.name)}
          >
            <Image source={item.image} style={styles.cityImage} />
            <Text style={styles.cityText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.skipButtonText}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 18,
    color: "#FF6347",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 80,
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  cityList: {
    justifyContent: "space-between",
  },
  cityCard: {
    margin: 10,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
  },
  cityImage: {
    width: 150,
    height: 100,
    borderRadius: 12,
  },
  cityText: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  skipButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#36465D",
    borderRadius: 8,
    alignItems: "center",
    width: 100,
  },
  skipButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ChooseCityScreen;
