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
    importancia: "XX",
  },
  {
    id: "qujsaksd hasjdaisud hasdjaskjdhakj shdkashdasudasdjkasda sndmasndkasmndakuknzxncbzxncbm znxbc mznxbcmzxnbcmznxbcmzxn",
    title: "Second Item",
  },
  {
    id: "sahdasdgkas klaskjhduasmajua aksjbdfakgcviasjkl aosihdaoisfhoasmka asjkdhaiusfhaksfna aasidhaoksd asjhdaoidhi",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "qujsaksd hasjdaisud hasdjaskjdhakj shdkashdasudasdjkasda sndmasndkasmndakuknzxncbzxncbm znxbc mznxbcmzxnbcmznxbcmzxn",
    title: "Second Item",
  },
  {
    id: "sahdasdgkas klaskjhduasmajua aksjbdfakgcviasjkl aosihdaoisfhoasmka asjkdhaiusfhaksfna aasidhaoksd asjhdaoidhi",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
];

export default function Card() {
  return (
    <View>
      {DATA.map((faq, index) => (
        <Notes
          key={index.toString()}
          title={faq.title}
          details={faq.id}
          category={faq.category}
          importancia={faq.importancia}
        />
      ))}
    </View>
  );
}
