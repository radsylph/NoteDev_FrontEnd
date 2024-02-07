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

import { SelectList } from "react-native-dropdown-select-list";

const Seletimportance = ({ setPriority }) => {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];

  return (
    <SelectList
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
      setSelected={(val) => setPriority(val)}
      data={data}
      save="value"
    />
  );
};

export default Seletimportance;
