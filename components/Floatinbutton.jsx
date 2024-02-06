import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../constants/colors";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const Floatinbutton = () => {
  const navigation = useNavigation(); // Obtén el objeto navigation

  const [icon_1] = useState(new Animated.Value(20));
  const [icon_2] = useState(new Animated.Value(20));
  const [icon_3] = useState(new Animated.Value(20));
  const [icon_4] = useState(new Animated.Value(20));

  const [pop, setPop] = useState(false);

  const test = () => {
    navigation.navigate("Create_edit");
  };
  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 250,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 180,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: -60,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: -60,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: -60,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Animated.View style={[styles.circle, { bottom: icon_1 }]}>
        <TouchableOpacity>
          <Icon name="star-o" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { bottom: icon_2 }]}>
        <TouchableOpacity>
          <Icon name="user-circle" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.circle, { bottom: icon_3 }]}>
        <TouchableOpacity onPress={() => test()}>
          <Icon name="sticky-note-o" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.circle}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <Icon name="plus" size={25} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Floatinbutton;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.light_purple,
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
