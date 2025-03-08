import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VerificationScreen = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Automatically move to the next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerification = () => {
    if (verificationCode.join("") === "1234") {
      Alert.alert("Success", "Verification successful!");
      navigation.navigate("ChooseCity");
    } else {
      Alert.alert("Error", "Invalid verification code.");
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

      <Text style={styles.title}>Verification</Text>
      <Text style={styles.description}>
        We’ve sent you the verification code on +1 2620 0323 7631
      </Text>

      <View style={styles.verificationContainer}>
        {verificationCode.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.verificationInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleInputChange(text, index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleVerification}
      >
        <Text style={styles.continueButtonText}>CONTINUE</Text>
        <Ionicons name="arrow-forward-outline" size={20} color="white" />
      </TouchableOpacity>

      <Text style={styles.resendText}>Re-send code in 20s</Text>
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
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  description: {
    color: "white",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  verificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  verificationInput: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
  continueButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#36465D",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  resendText: {
    color: "white",
    marginTop: 10,
  },
});

export default VerificationScreen;
