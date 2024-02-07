import React, { useEffect, useState } from "react";
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

import { Axios, note_endpoints } from "../constants/axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Notes = ({ title, details, category, priority, id, fav, onDelete }) => {
  const navigation = useNavigation();

  const [opened, setOpened] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [token, setToken] = useState("");
  const [isFavorite, setIsFavorite] = useState(fav);
  const [isDeleted, setIsDeleted] = useState(false);

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      // console.log(token);
      setToken(token);
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  const numberOfWords = details.split("").length;

  const setFavorite = async (id) => {
    try {
      const response = await Axios.patch(
        note_endpoints.setFavorite + id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    Alert.alert("Are you sure ? ", "This action cannot be undone", [
      {
        text: "Yes",
        onPress: () => onDelete(id),
      },
      {
        text: "No",
      },
    ]);
  };

  const editNote = async (id) => {
    try {
      await AsyncStorage.setItem("note_id", id).then(async () => {
        navigation.navigate("EditNote");
      });
    } catch (error) {
      console.log(error);
    }
  };

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
                Nv:{priority}
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity
              style={{ paddingHorizontal: 11 }}
              onPress={() => {
                setFavorite(id);
              }}
            >
              {isFavorite === false ? (
                <Icon name="star-o" size={35} color={COLORS.white} />
              ) : (
                <Icon name="star" size={35} color={COLORS.white} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 11 }}
              onPress={() => {
                editNote(id);
              }}
            >
              <Icon name="edit" size={35} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingHorizontal: 11 }}
              onPress={() => {
                deleteNote(id);
              }}
            >
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
