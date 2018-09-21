//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import GeneralHeader from '../../sections/components/general-header';
import InitialInvestmentForm from '../../forms/initial-investment-form';

class InitialInvestment extends Component{
	static navigationOptions = ({navigation}) => {
    return {
      header: <GeneralHeader sectionTitle="Inversión Inicial" withBack={true} handleBack={()=>{navigation.goBack()}}/>
    }
  };
	render() {
		return (
			<GeneralLayout>
				<InitialInvestmentForm 
          navigation={this.props.navigation}
        />
			</GeneralLayout>
		);
	}
}

export default InitialInvestment;