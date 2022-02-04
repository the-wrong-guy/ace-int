import { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { FontAwesome5 as Icon } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function App() {
  const [messages, setMessages] = useState([]);

  const user = {
    _id: 1,
    name: "Frank",
    avatar: "https://img.icons8.com/doodle/48/000000/frog-face.png",
  };

  const user2 = {
    _id: 2,
    name: "Chao Bhargab",
    avatar: "https://img.icons8.com/material-outlined/24/000000/crying.png",
  };

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: "Hola",
        createdAt: new Date(),
        user: user2,
      },
    ]);
  }, []);

  const onSend = useCallback((msg) => {
    setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#710bf4' />
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
          <Icon name='arrow-left' size={25} color='#fff' />
          <View style={{ width: 15 }} />

          <Image
            source={{
              uri: user2.avatar,
            }}
            style={styles.profileImg}
          />

          <View style={{ width: 15 }} />
          <View>
            <Text style={{ color: "#fff" }}>{user2.name}</Text>
            <Text style={{ color: "#fff" }}>3432493243</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name='question-circle' size={25} color='#fff' />
          <View style={{ width: 15 }} />
          <Icon name='ellipsis-v' size={25} color='#fff' />
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(msg) => onSend(msg)}
        user={user}
        showAvatarForEveryMessage
        showUserAvatar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
    resizeMode: "contain",
    overflow: "hidden",
  },
  profileContainer: { flex: 1, flexDirection: "row", alignItems: "center" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  topBar: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#710bf4",
    paddingVertical: 10,
  },
});
