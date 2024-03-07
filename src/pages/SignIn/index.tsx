import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Page</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFF0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'Top',
  },
  text: {
    fontSize: 45,
    fontFamily: 'Poppins-Medium',
  },
});
