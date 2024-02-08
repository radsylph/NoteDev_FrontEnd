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
import Card from "../components/Card";
import Floatinbutton from "../components/Floatinbutton";

import Inputdata from "../components/Inputdata";
import Seletcat from "../components/Selectcat";
import Seletimportance from "../components/Seletimportance";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState, useEffect } from "react";

import { Axios, note_endpoints } from "../constants/axios";

const Create_edit = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("");
  const [priority, setPriority] = useState(5);
  const [category, setCategory] = useState([]);
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

  const CreateNote = async () => {
    if (title === "" || description === "" || priority === "") {
      alert("Please fill all the fields");
      return;
    }
    const noteData = {
      title: title,
      description: description,
      priority: priority,
      category: category,
    };
    console.log(noteData);
    try {
      const response = await Axios.post(note_endpoints.create, noteData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      console.log(token);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.purple }}>
      <View style={{ marginHorizontal: 25, marginVertical: 22 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.white,
          }}
        >
          Select Categorie/s
        </Text>
        <Seletcat setCategory={setCategory} />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.white,
          }}
        >
          Priority Level
        </Text>
        <Seletimportance setPriority={setPriority} />
        <View style={{ marginTop: 12 }}>
          <Inputdata
            maxCharacters={100}
            placeholder={"title"}
            setText={setTitle}
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <Inputdata
            maxCharacters={300}
            placeholder={"description"}
            setText={setDescription}
          />
        </View>

        <Btn
          borderColorbtn={COLORS.white}
          Colorbtn={COLORS.light_purple}
          textColor={COLORS.white}
          btnLabel="Create Note"
          Press={() => {
            CreateNote();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create_edit;
