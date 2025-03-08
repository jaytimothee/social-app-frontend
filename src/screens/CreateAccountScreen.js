import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateAccountScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName.trim()) {
      Alert.alert("Validation Error", "Full name is required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert(
        "Validation Error",
        "Password must be at least 6 characters long."
      );
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Validation Error", "Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      Alert.alert("Success", "Account created successfully!");
      navigation.navigate("Verification");
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

      <Text style={styles.title}>Sign up</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#6e6e6e"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Full name"
            placeholderTextColor="#6e6e6e"
            value={formData.fullName}
            onChangeText={(value) =>
              setFormData({ ...formData, fullName: value })
            }
          />
        </View>
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
            value={formData.email}
            onChangeText={(value) => setFormData({ ...formData, email: value })}
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
            value={formData.password}
            onChangeText={(value) =>
              setFormData({ ...formData, password: value })
            }
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
            placeholder="Confirm password"
            placeholderTextColor="#6e6e6e"
            secureTextEntry={true}
            value={formData.confirmPassword}
            onChangeText={(value) =>
              setFormData({ ...formData, confirmPassword: value })
            }
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
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
        onPress={() => navigation.navigate("SignIn")}
        style={styles.footerTouchableText}
      >
        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.signInText}>Sign in</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
    alignSelf: "flex-start",
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
  signUpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36465D",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
  },
  signUpButtonText: {
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
  signInText: {
    color: "#1e90ff",
  },
});

export default CreateAccountScreen;
