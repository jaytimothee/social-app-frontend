import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen.js";
import VerificationScreen from "./src/screens/VerificationScreen.js";
import ChooseCityScreen from "./src/screens/ChooseCityScreen.js";

const Stack = createStackNavigator();

const IntroScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/SOCIAL-BG_TRANSPARENT.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>SOCIAL</Text>
          <Text style={styles.subtitle}>CONNECT - PROMOTE - GATHER</Text>
          <TouchableOpacity
            style={styles.ctaContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.exploreButtonText}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.footerButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text style={styles.footerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="ChooseCity" component={ChooseCityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
  ctaContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  exploreButtonText: {
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  footerButtonText: {
    fontSize: 16,
    color: "white",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
