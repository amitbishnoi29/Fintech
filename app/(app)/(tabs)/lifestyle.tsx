import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useQuery } from "@tanstack/react-query";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import Loader from "@/components/Loader";

type Lifestyle = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const LifestylesPage = () => {
  const headerHeight = useHeaderHeight();

  const { data, isLoading, error } = useQuery<Lifestyle[]>({
    queryKey: ["lifestyles"],
    queryFn: () => fetch("/api/lifestyle").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error loading lifestyle data</Text>;
  }

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 70 }}
    >
      <Text style={defaultStyles.sectionHeader}>Lifestyles</Text>
      <View style={styles.cardContainer}>
        {data?.map((lifestyle: Lifestyle) => (
          <View key={lifestyle.id} style={styles.card}>
            <Image src={lifestyle.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{lifestyle.title}</Text>
              <Text style={styles.cardDescription}>
                {lifestyle.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 8,
  },
});

export default LifestylesPage;
