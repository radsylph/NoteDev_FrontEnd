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

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ height: "90%" }}>
      <Card />
    </ScrollView>
  );
};

export default Home;
