import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Axios, note_endpoints } from "../constants/axios";
import Notes from "./Notes";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    importancia: "XX",
  },
  {
    id: "qujsaksd hasjdaisud hasdjaskjdhakj shdkashdasudasdjkasda sndmasndkasmndakuknzxncbzxncbm znxbc mznxbcmzxnbcmznxbcmzxn",
    title: "Second Item",
  },
  {
    id: "sahdasdgkas klaskjhduasmajua aksjbdfakgcviasjkl aosihdaoisfhoasmka asjkdhaiusfhaksfna aasidhaoksd asjhdaoidhi",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "qujsaksd hasjdaisud hasdjaskjdhakj shdkashdasudasdjkasda sndmasndkasmndakuknzxncbzxncbm znxbc mznxbcmzxnbcmznxbcmzxn",
    title: "Second Item",
  },
  {
    id: "sahdasdgkas klaskjhduasmajua aksjbdfakgcviasjkl aosihdaoisfhoasmka asjkdhaiusfhaksfna aasidhaoksd asjhdaoidhi",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
];

export default function Card() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState("");
  const isFocused = useIsFocused();

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      console.log(token);
      setToken(token);
      getNotes(token);
    });
  };
  const getNotes = async (token) => {
    try {
      console.log(`token: ${token}`);
      const response = await Axios.get(note_endpoints.getNotes, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data.notes);
      setNotes(response.data.notes);
      console.log(notes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getToken();
      console.log(notes);
    }
  }, [isFocused]);

  return (
    <View>
      {notes.map((faq, index) => (
        <Notes
          key={index.toString()}
          title={faq.title}
          details={faq.description}
          categoria={faq.category_id}
          importancia={faq.priority}
        />
      ))}
    </View>
  );
}
