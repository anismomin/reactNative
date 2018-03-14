import React , { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {

	state = {
		places: ['karachi', 'Lahore', 'Larkana']
	};
	
	addPlaceHandler = (placeName) => {
			
		this.setState(prevState => {
			return {
				places : prevState.places.concat(placeName)
			};
		});

	};

	render() {
	
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.addPlaceHandler} />
				<PlaceList places={this.state.places} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 25,
		backgroundColor: "#fff",
	}
});
