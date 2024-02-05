import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import Btn from "../components/Btn";
import COLORS from "../constants/colors";
import { Axios, user_endpoints } from "../constants/axios";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async () => {
    const userData = {
      email: email,
      password: password,
      username: username,
    };
    if (
      email === "" ||
      password === "" ||
      username === "" ||
      password2 === ""
    ) {
      Alert.alert("error", "Please fill all the fields", [{ text: "OK" }]);
      return;
    }
    if (password !== password2) {
      Alert.alert("error", "Passwords do not match", [{ text: "OK" }]);
      return;
    }
    console.log(userData);
    try {
      const response = await Axios.post(user_endpoints.register, userData);
      console.log(response);
      Alert.alert("Success", "User registered successfully", [{ text: "OK" }]);
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      let errors = error.response.data.message;
      Alert.alert("error", errors, [{ text: "OK" }]);
      console.log(errors);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.purple }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          create a new account
        </Text>
        <View
          style={{
            backgroundColor: COLORS.white,
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 60,
            alignItems: "center",
            marginHorizontal: 22,
          }}
        >
          <TextInput
            style={{
              height: 48,
              borderRadius: 100,
              color: COLORS.purple,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: COLORS.grayish_white,
              marginVertical: 10,
            }}
            placeholderTextColor={COLORS.purple}
            placeholder="User Name"
            value={username}
            onChangeText={(username) => setUsername(username)}
            keyboardType={"email-address"}
          ></TextInput>

          <TextInput
            style={{
              height: 48,
              borderRadius: 100,
              color: COLORS.purple,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: COLORS.grayish_white,
              marginVertical: 10,
            }}
            placeholderTextColor={COLORS.purple}
            placeholder="E-mail"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType={"email-address"}
          ></TextInput>

          <TextInput
            style={{
              height: 48,
              borderRadius: 100,
              color: COLORS.purple,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: COLORS.grayish_white,
              marginVertical: 10,
            }}
            placeholderTextColor={COLORS.purple}
            placeholder="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          ></TextInput>

          <TextInput
            style={{
              height: 48,
              borderRadius: 100,
              color: COLORS.purple,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: COLORS.grayish_white,
              marginVertical: 10,
            }}
            placeholderTextColor={COLORS.purple}
            placeholder=" Confirm Password"
            value={password2}
            onChangeText={(password2) => setPassword2(password2)}
            secureTextEntry={true}
          ></TextInput>

          <Btn
            TextColor={COLORS.white}
            Colorbtn={COLORS.purple}
            textColor={COLORS.white}
            btnLabel="Signup"
            Press={() => {
              handleSubmit();
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.purple,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
