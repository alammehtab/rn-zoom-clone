import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";

let socket;

export default function MeetingRoom() {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();

  const joinRoom = () => {
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    socket = io("http://7efb-111-88-200-23.ngrok.io");
    console.log("hello");
    socket.on("connection", () => console.log("connected"));
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
