//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import Phase1Layout from '../components/phase1-layout';
import Header from '../../sections/components/header';
// import Phase1Content from '../../phases/phase1-content';
// import Loader from '../../sections/components/loader';

class Phase1 extends Component{
	state={
		initialInvestment: 0,
		initialInvestmentAvailable: false
	};

	handleAccept = () => {
		console.log("Ingresar cantidad");
		this.setState({
			initialInvestmentAvailable: true
		});
		
		setTimeout(() => {
			this.setState({
				initialInvestmentAvailable: false
			})
		},2000);
	};

	handleDecline = () => {
		console.log("Enviar a pantalla para calculo de Inversión Inicial");
	};

	render() {
		return (
			<Phase1Layout
				handleAccept={this.handleAccept}
				handleDecline={this.handleDecline}
				initialInvestment={this.state.initialInvestment}
				initialInvestmentAvailable={this.state.initialInvestmentAvailable}
			>
				{/*<Header sectionTitle="BIT Consulting" />*/}
			</Phase1Layout>
		);
	}
}

export default Phase1;