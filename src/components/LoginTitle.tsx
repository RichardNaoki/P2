import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LoginTitleProps {
  titleText: string;
  subTitleText: string;
}

const LoginTitle: React.FC<LoginTitleProps> = ({ titleText, subTitleText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {titleText} <Text style={styles.subTitle}>{subTitleText}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    color: '#888',
  },
});

export default LoginTitle;