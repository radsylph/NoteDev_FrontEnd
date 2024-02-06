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

import { MultipleSelectList } from "react-native-dropdown-select-list";

const Seletcat = () => {
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: "1", value: "general", disabled: true },
    { key: "2", value: "videojuegos" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <MultipleSelectList
      placeholder="Categoties"
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
      data={data}
      save="value"
      //onSelect={() => alert(selected)}
      label="Categories"
      notFoundText="No data exists"
      badgeStyles={{ backgroundColor: COLORS.light_purple }}
    />
  );
};

export default Seletcat;
