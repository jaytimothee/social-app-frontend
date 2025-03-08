import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Basic validation for demo purposes
    if (email === "user@example.com" && password === "password123") {
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Please enter valid email and password."
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>SOCIAL</Text>
      <Text style={styles.signInText}>Sign in</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#6e6e6e"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="abc@email.com"
            placeholderTextColor="#6e6e6e"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputField}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#6e6e6e"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Your password"
            placeholderTextColor="#6e6e6e"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          <Switch
            value={false}
            trackColor={{ false: "#4d4d4d", true: "#1e90ff" }}
            thumbColor="white"
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Ionicons
          name="logo-google"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Ionicons
          name="logo-facebook"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateAccount")}
        style={styles.footerTouchableText}
      >
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  signInText: {
    fontSize: 18,
    color: "white",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    color: "white",
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: "#1e90ff",
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36465D",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  orText: {
    color: "white",
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 15,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
  },
  socialButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: "black",
  },
  footerTouchableText: {
    marginTop: 20,
  },
  footerText: {
    color: "white",
  },
  signUpText: {
    color: "#1e90ff",
  },
});

export default SignInScreen;
