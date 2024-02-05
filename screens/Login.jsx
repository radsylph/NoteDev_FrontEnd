import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Btn from "../components/Btn";
import COLORS from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Axios, user_endpoints } from "../constants/axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      Alert.alert("Success", "Welcome back", [{ text: "OK" }]);
      navigation.navigate("Home");
    }
  };
  useEffect(() => {
    console.log("useEffect");
    getToken();
  }, []);

  const handleSubmit = async () => {
    const userData = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      Alert.alert("error", "Please fill all the fields", [{ text: "OK" }]);
      return;
    }
    console.log(userData);
    try {
      const response = await Axios.post(user_endpoints.login, userData);
      console.log(response.data);
      console.log(response.data.token);
      setEmail("");
      setPassword("");
      await AsyncStorage.setItem("token", response.data.token);
      Alert.alert("Success", "You have logged in", [{ text: "OK" }]);
      navigation.navigate("Home");
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
            marginVertical: 10,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: COLORS.white,
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
            marginHorizontal: 22,
          }}
        >
          <Text
            style={{ fontSize: 40, color: COLORS.purple, fontWeight: "bold" }}
          >
            Welcome back
          </Text>
          <Text
            style={{
              color: COLORS.grayish_white,
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>

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
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{ color: COLORS.purple, fontWeight: "bold", fontSize: 16 }}
            >
              Forget your Password?
            </Text>
          </View>
          <Btn
            TextColor={COLORS.white}
            Colorbtn={COLORS.purple}
            textColor={COLORS.white}
            btnLabel="Login"
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
            <Text>Don´t have an account?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.purple,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onPress={() => navigation.navigate("Signup")}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
