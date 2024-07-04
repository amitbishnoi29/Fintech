import Dropdown from "@/components/Dropdown";
import RoundBtn from "@/components/RoundBtn";
import Colors from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";

const Page = () => {
  console.log(Platform.OS);

  const balance = 1320;
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>€</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn
          icon={"add"}
          text={"Add money"}
          // onPress={onAddMoney}
        />
        <RoundBtn
          icon={"refresh"}
          text={"Exchange"}
          //   onPress={clearTransactions}
        />
        <RoundBtn icon={"list"} text={"Details"} />
        {Platform.OS === "android" ?
            <Dropdown /> : <Text>IOS</Text>
        }
        {/* <Dropdown /> */}
      </View>
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  account: {
    alignItems: "center",
    margin: 80,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    marginLeft: 5,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
