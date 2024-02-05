import React, { useState } from "react";
import {
  Animated,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import COLORS from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const Notes = ({ title, details, category, importancia }) => {
  const [opened, setOpened] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const numberOfWords = details.split("").length;

  function toggleAccordion() {
    if (!opened) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }

    setOpened(!opened);
  }

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, numberOfWords],
  });

  return (
    <View style={style.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={style.header}>
          <View style={{ width: 150 }}>
            <Text style={{ color: COLORS.white }}>{title}</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: COLORS.white }}>{category}</Text>
              <Text style={{ color: COLORS.white, marginLeft: 6 }}>
                Nv:{importancia}
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity style={{ paddingHorizontal: 11 }}>
              <Icon name="star-o" size={35} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 11 }}>
              <Icon name="edit" size={35} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 11 }}>
              <Icon name="trash-o" size={35} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          <AntDesign name={opened ? "caretup" : "caretdown"} size={16} />
        </View>
      </TouchableWithoutFeedback>

      <Animated.View
        style={[style.content, { height: heightAnimationInterpolation }]}
      >
        <Text style={{ color: COLORS.white }}>{details}</Text>
      </Animated.View>
    </View>
  );
};

export default Notes;

const style = StyleSheet.create({
  content: {
    marginTop: 8,
  },

  container: {
    margin: 10,
    padding: 15,
    backgroundColor: COLORS.purple,
    borderRadius: 6,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
