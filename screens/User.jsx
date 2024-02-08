import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import Btn from "../components/Btn";
import COLORS from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Axios, user_endpoints } from "../constants/axios";

const User = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
      getUserInfo(token);
    });
  };

  const getUserInfo = async (token) => {
    try {
      await Axios.get(user_endpoints.getUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setUser(response.data.user.username);
        setEmail(response.data.user.email);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const deleteToken = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  const signOff = async () => {
    Alert.alert("Sign off", "Are you sure you want to sign off?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => deleteToken(),
      },
    ]);
  };

  const deleteAccount = async () => {
    try {
      const response = await Axios.delete(user_endpoints.delete, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      deleteToken();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => deleteAccount(),
        },
      ]
    );
  };

  const editUser = async (token) => {
    if (user === "" || email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    const userData = {
      username: user,
      email: email,
      password: password,
    };
    try {
      const response = await Axios.put(user_endpoints.edit, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      alert("User information updated");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.purple }}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            height: "auto",
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
            marginHorizontal: 22,
          }}
        >
          <Image
            source={require("../assets/UserAvatar.png")}
            style={{ top: 10, height: 160, width: 160 }}
          />

          <TextInput
            style={{
              height: 48,
              borderRadius: 100,
              color: COLORS.purple,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: COLORS.grayish_white,
              marginVertical: 20,
            }}
            placeholderTextColor={COLORS.purple}
            placeholder="User"
            value={user}
            onChangeText={(user) => setUser(user)}
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
            keyboardType={"email-address"}
            value={email}
            onChangeText={(email) => setEmail(email)}
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
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>

          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 150,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.purple,
                width: 160,
                alignItems: "center",
                borderRadius: 60,
              }}
              onPress={() => {
                editUser(token);
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Save Information
              </Text>
            </TouchableOpacity>
          </View>
          <Btn
            borderColorbtn={COLORS.light_purple}
            Colorbtn={COLORS.purple}
            textColor={COLORS.white}
            btnLabel="Sign off"
            Press={() => {
              signOff();
            }}
          />
          <Btn
            borderColorbtn={COLORS.emergenci}
            Colorbtn={COLORS.emergenci}
            textColor={COLORS.red}
            btnLabel="Delete Account"
            Press={() => {
              deleteUser();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default User;
