import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import Loader from "@/components/Loader";
import { Ionicons } from "@expo/vector-icons";

type Investment = {
  id: string;
  name: string;
  type: string;
  return: number;
  status: string;
};

const PAGE_SIZE = 7; // Number of items per page

const InvestPage = () => {
  const headerHeight = useHeaderHeight();
  const [page, setPage] = useState(1); // Current page

  const { data, isLoading, error, isFetching, refetch } = useQuery<
    Investment[]
  >({
    queryKey: ["invest", page],
    queryFn: () =>
      fetch(`/api/invest?page=${page}&pageSize=${PAGE_SIZE}`).then((res) =>
        res.json()
      ),
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error loading investments</Text>;
  }

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Invest</Text>
      <View style={defaultStyles.block}>
        {data?.map((investment: Investment) => (
          <Link href={`/invest/${investment.id}`} key={investment.id} asChild>
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", color: Colors.dark }}>
                  {investment.name}
                </Text>
                <Text style={{ color: Colors.gray }}>{investment.type}</Text>
              </View>
              <View style={{ gap: 6, alignItems: "flex-end" }}>
                <Text>{investment.return}% Return</Text>
                <Text style={{ color: Colors.primary }}>
                  {investment.status}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={handlePrevPage} disabled={page === 1}>
          <Ionicons
            name={"arrow-back-circle-outline"}
            size={32}
            color={page === 1 ? Colors.gray : Colors.dark}
          />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 10 }}>Page {page}</Text>

        <TouchableOpacity
          onPress={handleNextPage}
          disabled={isFetching || !data || data.length < PAGE_SIZE}
        >
          <Ionicons
            name={"arrow-forward-circle-outline"}
            size={32}
            color={page === data?.length ? Colors.gray : Colors.dark}
          />
        </TouchableOpacity>
        {/* <Button onPress={handleNextPage} title="Next Page" /> */}
      </View>
    </ScrollView>
  );
};

export default InvestPage;
