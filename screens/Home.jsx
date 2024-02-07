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


const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", height: "auto" }}>
        <Cathorisonal />
      </View>
      <ScrollView style={{ height: "90%" }}>
        <Card />
      </ScrollView>
      <View>
        <Floatinbutton />
      </View>
    </SafeAreaView>
  );
};

export default Home;
