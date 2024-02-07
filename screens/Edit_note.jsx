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

const EditNote = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState("");
  const [priority, setPriority] = useState(5);
  const [category, setCategory] = useState([]);
  const [token, setToken] = useState("");
  const [noteId, setNoteId] = useState("");

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });
    await AsyncStorage.getItem("note_id").then((note_id) => {
      setNoteId(note_id);
    });
    console.log(`the id is ${noteId}`);
  };

  useEffect(() => {
    getToken();
  }, []);

  const EditNote = async () => {
    const noteData = {
      title: title,
      description: description,
      priority: priority,
      category: category,
    };
    console.log(noteData);
    try {
      const response = await Axios.put(note_endpoints.edit + noteId, noteData, {
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
          btnLabel="Edit Note"
          Press={() => {
            EditNote();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditNote;
