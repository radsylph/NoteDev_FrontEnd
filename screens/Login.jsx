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

const Login = ({ navigation }) => {
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
            placeholder="E-mail/User Name"
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
              Forger Password?
            </Text>
          </View>
          <Btn
            TextColor={COLORS.white}
            Colorbtn={COLORS.purple}
            textColor={COLORS.white}
            btnLabel="Login"
            Press={() => {
              alert("Logged In"), navigation.navigate("Home");
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
