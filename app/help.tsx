import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors'; // Ensure the path to Colors is correct

const HelpPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>Help Page</Text>
        <Text style={styles.paragraph}>
          Welcome to the Help Page of our Fintech app. Here you can find information about various features and functionalities of the app.
        </Text>
        <Text style={styles.subheading}>Getting Started</Text>
        <Text style={styles.paragraph}>
          To get started, you need to create an account and link your bank account. Follow the instructions on the screen to complete the setup process.
        </Text>
        <Text style={styles.subheading}>Features</Text>
        <Text style={styles.paragraph}>
          Our app offers a range of features to help you manage your finances, including:
        </Text>
        <Text style={styles.listItem}>• Balance Tracking</Text>
        <Text style={styles.listItem}>• Budget Management</Text>
        <Text style={styles.listItem}>• Expense Analysis</Text>
        <Text style={styles.listItem}>• Secure Transactions</Text>
        <Text style={styles.subheading}>FAQs</Text>
        <Text style={styles.paragraph}>
          If you have any questions, please refer to our FAQ section or contact our support team for assistance.
        </Text>
        <Text style={styles.subheading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          For further assistance, please reach out to our customer support at support@fintechapp.com or call us at 123-456-7890.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.dark,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
    color: Colors.primary,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    color: Colors.gray,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 6,
    color: Colors.gray,
  },
});

export default HelpPage;
