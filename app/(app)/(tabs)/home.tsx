import Dropdown from "@/components/Dropdown";
import RoundBtn from "@/components/RoundBtn";
import WidgetList from "@/components/SortableList/WidgetList";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useBalanceStore } from "@/store/balanceStore";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const Page = () => {
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();
  const headerHeight = useHeaderHeight();
  const onAddMoney = () => {
    const amount =
      Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
    const title = amount > 0 ? "Credit" : "Debit";
    runTransaction({
      id: Math.random().toString(),
      amount,
      date: new Date(),
      title,
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>€</Text>
        </View>
        <Text
          style={{
            backgroundColor: Colors.lightGray,
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 10,
            color: Colors.dark,
            fontWeight: 600,
            marginTop: 15,
          }}
        >
          Accounts
        </Text>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} text={"Add money"} onPress={onAddMoney} />
        <RoundBtn
          icon={"refresh"}
          text={"Exchange"}
          onPress={clearTransactions}
        />
        <RoundBtn icon={"list"} text={"Details"} />
        {/* {Platform.OS === "android" ? <Dropdown /> : <Text>IOS</Text>} */}
        {/* <Dropdown /> */}
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>
            No transactions yet
          </Text>
        )}
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
          >
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? "add" : "remove"}
                size={24}
                color={transaction.amount > 0 ? "green" : "red"}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <Text>{transaction.amount}€</Text>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
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
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
