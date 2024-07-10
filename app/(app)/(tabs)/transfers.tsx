import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import Loader from "@/components/Loader";

type Transfer = {
  id: string;
  fromAccount: string;
  toAccount: string;
  amount: number;
  status: string;
};

const TransfersPage = () => {
  const headerHeight = useHeaderHeight();

  const { data, isLoading, error } = useQuery<Transfer[]>({
    queryKey: ["transfers"],
    queryFn: () =>
      fetch("/api/transfers?pageSize=10&pageNumber=1").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error loading transfers</Text>;
  }

  const getColor = (status: string) => {
    switch (status) {
      case "Failed":
        return "red";

      case "Pending":
        return Colors.primaryMuted;
      case "Completed":
        return "green";
      default:
        return Colors.dark;
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight , paddingBottom: 90 }}
    >
      <Text style={defaultStyles.sectionHeader}>Transfers</Text>
      <View style={defaultStyles.block}>
        {data?.map((transfer: Transfer) => (
          <Link href={`/transfers/${transfer.id}`} key={transfer.id} asChild>
            <TouchableOpacity
              style={{ flexDirection: "row", gap: 14, alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", color: Colors.dark }}>
                  From: {transfer.fromAccount}
                </Text>
                <Text style={{ color: Colors.gray }}>
                  To: {transfer.toAccount}
                </Text>
              </View>
              <View style={{ gap: 6, alignItems: "flex-end" }}>
                <Text>${transfer.amount}</Text>
                <Text style={{ color: getColor(transfer.status) }}>
                  {transfer.status}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default TransfersPage;
