import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button } from 'react-native';

class PlaceInput extends Component {
	
	state = {
		placeName: ""
	};

	textChangeHandler = val => {

		this.setState({
			placeName : val
		});

	};
	
	addPlaceHandler = () => {
		
		if (this.state.placeName.trim() === "") {
			return;
		};
		

		this.props.onPlaceAdded(this.state.placeName);

	
	};

	render() {
	
		return (
		<View style={styles.formView}>
			<TextInput 
				value={this.state.placeName}
				style={styles.inputs}
				placeholder="Add Awesome Place"
				onChangeText={this.textChangeHandler}
			/>
			<Button 
				title="Add"
				style={styles.buttons}
				onPress={this.addPlaceHandler}
			/>
		</View>);
	
	};

}
  

const styles = StyleSheet.create({
	formView : {
		//flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		//alignItems: 'center',
		padding: 10,
		width: '100%'
	},
  	inputs: {
		height: 40, 
		width: '70%', 
		padding: 10, 
		borderColor: 'gray', 
		borderWidth: 1,
	},
	buttons: {
		height: 40, 
		width: '30%', 
		marginTop: 10, 
		padding: 10, 
		borderColor: 'gray',
		backgroundColor: '#cfcfcf', 
		borderWidth: 1
	}
});
	
export default PlaceInput;