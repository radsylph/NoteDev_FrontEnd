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
import Cathorisonal from "../components/Cathorisonal";
import { Axios, note_endpoints } from "../constants/axios";
import { useState, useEffect } from "react";

import { MultipleSelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Seletcat = ({ setCategory }) => {
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [token, setToken] = useState("");

  const getToken = async () => {
    await AsyncStorage.getItem("token").then((token) => {
      console.log(token);
      setToken(token);
      getCategories(token);
    });
  };

  const getCategories = async (token) => {
    try {
      await Axios.get(note_endpoints.getCategories, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setCategories(response.data.categories);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
    categories.forEach((category) => {
      console.log(category);
    });
  }, []);

  const categoryData = categories.map((category) => ({
    key: category._id,
    value: category.name,
  }));

  return (
    <MultipleSelectList
      placeholder="Categories"
      boxStyles={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.light_purple,
        borderWidth: 2,
      }}
      dropdownStyles={{ backgroundColor: COLORS.white }}
      dropdownItemStyles={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.secundary,
      }}
      dropdownTextStyles={{ backgroundColor: COLORS.white }}
      setSelected={(val) => setSelected(val)}
      data={categoryData}
      save="value"
      onSelect={() => setCategory(selected)}
      label="Categories"
      notFoundText="No data exists"
      badgeStyles={{ backgroundColor: COLORS.light_purple }}
    />
  );
};

export default Seletcat;
