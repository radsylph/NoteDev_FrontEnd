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

const Create_edit = ({ navigation }) => {
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
          Select Categorie
        </Text>
        <Seletcat />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.white,
          }}
        >
          Importance Level
        </Text>
        <Seletimportance />
        <View style={{ marginTop: 12 }}>
          <Inputdata maxCharacters={250} />
        </View>

        <Btn
          borderColorbtn={COLORS.white}
          Colorbtn={COLORS.light_purple}
          textColor={COLORS.white}
          btnLabel="Create Note"
        />
      </View>
    </SafeAreaView>
  );
};

export default Create_edit;
