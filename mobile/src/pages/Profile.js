import React from "react";

import { WebView } from "react-native-webview";

// import { Container } from './styles';

export default function Profile({ navigation }) {
  /*Sistema está buscando o username pela propriedade navigation atraveis do 
   navigation.navigate("Profile", { github_username: "alancoosta" }); */
    const github_username = navigation.getParam("github_username");

  return (
    <WebView
      source={{ uri: `https://github.com/${github_username}` }}
      style={{ flex: 1 }}
    />
  );
}