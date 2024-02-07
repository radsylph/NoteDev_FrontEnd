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
import { useState } from "react";

const Home = ({ navigation }) => {
  const [toggleFav, setToggleFav] = useState(false);
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", height: "auto" }}>
        <Cathorisonal />
      </View>
      <ScrollView style={{ height: "90%" }}>
        <Card toggleFav={toggleFav} />
      </ScrollView>
      <View>
        <Floatinbutton setToggleFav={setToggleFav} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
