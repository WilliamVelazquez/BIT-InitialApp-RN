//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import HomeLayout from '../components/home-layout';
import Header from '../../sections/components/header';
// import Phase1Content from '../../phases/phase1-content';
// import Loader from '../../sections/components/loader';

class Home extends Component{
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
			<HomeLayout
				handleAccept={this.handleAccept}
				handleDecline={this.handleDecline}
				initialInvestment={this.state.initialInvestment}
				initialInvestmentAvailable={this.state.initialInvestmentAvailable}
			>
				<Header sectionTitle="BIT Consulting" />
			</HomeLayout>
		);
	}
}

export default Home;