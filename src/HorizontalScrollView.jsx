import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {/* Box 1 */}
        <View style={styles.item}>
          <Text style={styles.itemText}>HOME</Text>
        </View>

        {/* Box 2 */}
        <View style={styles.item}>
          <Text style={styles.itemText}>NEWS</Text>
        </View>

        {/* Box 3 */}
        <View style={styles.item}>
          <Text style={styles.itemText}>SHOWBIZ</Text>
        </View>

        {/* Box 4 */}
        <View style={styles.item}>
          <Text style={styles.itemText}>EXTRA</Text>
        </View>

        {/* Box 5 */}
        <View style={styles.item}>
          <Text style={styles.itemText}>STYLE</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    position: 'stickey'
  },
  item: {
    width: 80, // Adjust the width as needed
    height: 20,
    backgroundColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalScrollView;
