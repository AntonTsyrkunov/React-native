import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";

import background from "../assets/images/background.jpg";
import rmvIcn from "../assets/images/remove.png";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  submitLogin = () => {
      console.log({
        email: email,
        password: password,
      }
      );
  }

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View accessibilityIgnoresInvertColors={true} style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.form}>
          <Text style={styles.caption}>Увійти</Text>
          <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={email}
              style={styles.input}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
              onChangeText={setEmail}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              value={password}
              style={styles.input}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
              onChangeText={setPassword}
            />
          </KeyboardAvoidingView>
          <Text style={styles.showText}>Показати</Text>
          <Pressable style={styles.registerButton} onPress={submitLogin}>
            <Text style={styles.RegisterButtonCaption}>Увійти</Text>
          </Pressable>
          <Pressable style={styles.logInButton}>
            <Text style={styles.LoginButtonCaption}>Немає акаунту? Зареєструватися</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  background: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
  },
  input: {
    maxWidth: "100%",
    borderWidth: 3,
    color: "#212121",
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    padding: 16,
  },
  form: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    gap: 10,
  },
  photoFrame: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    height: 120,
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  rmvIcn: {
    top: "63.18%",
    left: "84.85%",
  },
  caption: {
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
  },
  registerButton: {
    marginTop: 27,
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",

    fontWeight: 400,
  },
  logInButton: {
    marginTop: -16,
    marginBottom: 49,
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "inherit",
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
  },
  RegisterButtonCaption: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#FFF",
    fontSize: 16,
  },
  LoginButtonCaption: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#1B4371",
    fontSize: 16,
  },
  showText: {
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
    position: "absolute",
    top: 190,
    right: "8.14%",
  },
});
