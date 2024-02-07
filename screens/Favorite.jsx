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
import FavCard from "../components/FavCard";
import Floatinbutton from "../components/Floatinbutton";
import Cathorisonal from "../components/Cathorisonal";

const Favorite = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", height: "auto" }}>
        <Cathorisonal />
      </View>
      <ScrollView style={{ height: "90%" }}>
        <FavCard />
      </ScrollView>
      <View>
        <Floatinbutton />
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
