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
import Btn from "./Btn";
import COLORS from "../constants/colors";
import Card from "./Card";
import Floatinbutton from "./Floatinbutton";
import Cathorisonal from "../components/Cathorisonal";

const Inputdata = ({ maxCharacters, placeholder, setText }) => {
  return (
    <View>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={maxCharacters}
        placeholder={placeholder}
        onChangeText={(text) => setText(text)}
        style={{ padding: 10, borderRadius: 25, backgroundColor: COLORS.white }}
      />
    </View>
  );
};

export default Inputdata;
