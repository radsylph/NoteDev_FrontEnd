import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Btn from "../components/Btn";
import COLORS from "../constants/colors";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[COLORS.white, COLORS.purple]}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 22 }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/logo_NoteDev.png")}
              style={{ top: 130, height: 260, width: 320 }}
            />
          </View>
          <View
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              paddingHorizontal: 22,
              position: "absolute",
              height: "100%",
              top: "70%",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Btn
              Colorbtn={COLORS.white}
              borderColorbtn={COLORS.purple}
              textColor={COLORS.purple}
              btnLabel="Login"
              Press={() => navigation.navigate("Login")}
            />
            <Btn
              Colorbtn={COLORS.purple}
              borderColorbtn={COLORS.white}
              textColor={COLORS.white}
              btnLabel="Signup"
              Press={() => navigation.navigate("Signup")}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
