import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

module.exports = React.createClass ({
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>SendBird Test></Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }
})
