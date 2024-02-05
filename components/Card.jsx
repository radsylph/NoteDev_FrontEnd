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

import Notes from "./Notes";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "qujsaksdhasjdaisudhasdjaskjdhakjshdkashdasudasdjkasdasndmasndkasmndakuknzxncbzxncbmznxbc mznxbcmzxnbcmznxbcmzxn",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Card = () => {
  return (
    <View>
      {DATA.map((faq, index) => (
        <Notes key={index.toString()} title={faq.title} details={faq.id} />
      ))}
    </View>
  );
};

export default Card;
