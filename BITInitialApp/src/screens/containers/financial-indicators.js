//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import GeneralHeader from '../../sections/components/general-header';
import FinancialIndicatorsForm from '../../forms/financial-indicators-form';

class FinancialIndicators extends Component{
	static navigationOptions = ({navigation}) => {
    return {
      header: <GeneralHeader sectionTitle="Indicadores Financieros" withBack={true} handleBack={()=>{navigation.goBack()}}/>
    }
  };
  handlePress = () => {
  	console.log("Completed");
  	this.props.navigation.navigate('Contact');
  }

	render() {
		//const indicators
		return (
			<FinancialIndicatorsForm 
        navigation={this.props.navigation}
        viable={true}
        handlePress={this.handlePress}
      />
		);
	}
}

export default FinancialIndicators;