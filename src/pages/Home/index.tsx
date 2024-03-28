import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components';
import {PageHeader} from '../../components';

const HomePage = () => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader type="withPhoto" />
      <View style={styles.contentWrapper1}>
        <Text style={styles.balance}>Your Balance</Text>
        <Text style={styles.balanceMoney}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.cashOn}>
          <Text style={styles.cashOnStyle1}>Cash On Hand</Text>
          <Text style={styles.cashOnMoney1}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.cashOn}>
          <Text style={styles.cashOnStyle2}>Cash On Bank</Text>
          <Text style={styles.cashOnMoney2}> Rp. 6.000.000</Text>
        </View>
      </View>
      <View style={styles.contentWrapper2}>
        <Text style={styles.transactionText}>Add Transaction</Text>
        <Button
          label="Cash On Hand"
          onPress={() => navigation.navigate('CashOnHand')}
        />
        <Gap height={18} />
        <Button
          label="Cash On Bank"
          onPress={() => navigation.navigate('CashOnBank')}
        />
      </View>
      <Gap height={25} />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper1: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  balance: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 13,
    paddingBottom: 4,
  },
  balanceMoney: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
    marginBottom: 18,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  cashOn: {
    flexDirection: 'row',
  },
  cashOnStyle1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
  },
  cashOnMoney1: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 20,
    paddingLeft: 20,
  },
  cashOnStyle2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
  },
  cashOnMoney2: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 11,
    paddingLeft: 20,
  },
  contentWrapper2: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 72,
  },
  transactionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    paddingTop: 10.6,
    marginBottom: 9,
  },
  contentWrapper3: {
    flex: 2,
    marginTop: 24,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeIcon: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
  squareFrame: {
    paddingTop: 15,
    paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
  },
});
