//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	Text, 
	View,
	StyleSheet 
} from 'react-native';

import Phase1Content from '../../phases/phase1-content';
import Loader from '../../sections/components/loader';

function HomeLayout(props) {
	return(
		<View style={styles.container}>
			{props.children}
			{
				(props.initialInvestment == 0 && !props.initialInvestmentAvailable) ?
				<Phase1Content 
					handleAccept={props.handleAccept} 
					handleDecline={props.handleDecline} 
				/>
				:
				<Loader />
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1
	}
});

export default HomeLayout;