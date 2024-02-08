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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Btn from "../components/Btn";
import COLORS from "../constants/colors";

import Inputdata from "../components/Inputdata";
import { useState, useEffect } from "react";
import { Axios, note_endpoints } from "../constants/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create_cat = ({ navigation }) => {
  const [category, setCategory] = useState("");
  const [token, setToken] = useState("");

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });
  };

  useEffect(() => {
    getToken();
    console.log(token);
  }, []);

  const CreateCategorie = async () => {
    console.log(category);

    if (category === "") {
      alert("Please fill the category");
    }
    const data = {
      name: category,
    };

    try {
      const response = await Axios.post(note_endpoints.createCategory, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <View style={{ marginHorizontal: 25, marginVertical: 22 }}>
        <View style={{ marginTop: 12 }}>
          <Inputdata maxCharacters={30} setText={setCategory} />
        </View>

        <Btn
          borderColorbtn={COLORS.white}
          Colorbtn={COLORS.light_purple}
          textColor={COLORS.white}
          btnLabel="Create Categorie"
          Press={() => {
            CreateCategorie();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create_cat;
