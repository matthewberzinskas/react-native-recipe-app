import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";

export default function App() {
  const URL =
    "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json";
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    console.log(`Fetching data from ${URL}`);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error("Error retrieving from API.", error);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error loading data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Recipe app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
