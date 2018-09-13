//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import Header from '../../sections/components/header';
import UserContactInfoForm from '../../forms/user-contact-info-form';

class Contact extends Component{
	state = {
		name:'',
		email:'',
		phone:''
	}

	handleSubmit = () =>{
		console.log("Name----->",this.state.name);
	}
	handleChangeText = (name) => {
		this.setState({
			name
		});
	}

	render() {
		return (
			<GeneralLayout>
				<Header sectionTitle="Contactanos!" />
				<UserContactInfoForm
					handleSubmit={this.handleSubmit} 
					handleChangeText={this.handleChangeText}
				/>
			</GeneralLayout>
		);
	}
}

export default Contact;