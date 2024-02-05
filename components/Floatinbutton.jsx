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

const Floatinbutton = () => {
  const [icon_1] = useState(new Animated.Value(20));
  const [icon_2] = useState(new Animated.Value(20));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setPop(true);
    Animated.timing(icon_2, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
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

      <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2 }]}>
        <TouchableOpacity>
          <Icon name="user-circle" size={25} color={COLORS.white} />
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
