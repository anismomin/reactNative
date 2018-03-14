import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => (
	<View style={styles.listItem}>
		<Text>{props.placeName}</Text>
	</View>
);

const styles = StyleSheet.create({
	listItem : {
		width: '100%',
		backgroundColor: '#eee',
		padding: 10,
		marginBottom:10
	}
});
	
export default listItem;