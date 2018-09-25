//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    console.log("PropsFromRedux", this.props);
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

function mapStateToProps(state) {
  console.log("ReduxState",state);
  return {
    projectValues: state.data.projectValues,
    initialInvestmentValues: state.data.initialInvestmentValues,
    productValues: state.data.productValues
  }
}

export default connect(mapStateToProps)(FinancialIndicators);