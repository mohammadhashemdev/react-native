import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";

const ShowResultsScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  return (
    <>
      {result && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{result.name}</Text>
            <Text
              style={result.hours.is_opn_now ? styles.isOpen : styles.closed}
            >
              {result.hours.is_opn_now ? "Open" : "Closed now"}
            </Text>
          </View>
          <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
          <Text style={styles.contactTitle}>Contact Information:</Text>
          <Text>Phone: {result.phone}</Text>
          <Text>
            Address: {result.location.address1}, {result.location.city},{" "}
            {result.location.country}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  imgStyle: {
    width: undefined,
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },

  contactTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },

  titleContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  isOpen: {
    backgroundColor: "#51e57b",
    paddingVertical: 3,
    paddingHorizontal: 6,
    color: "white",
  },
  closed: {
    backgroundColor: "#e84242",
    paddingVertical: 3,
    paddingHorizontal: 6,
    color: "white",
  },
});

export default ShowResultsScreen;
