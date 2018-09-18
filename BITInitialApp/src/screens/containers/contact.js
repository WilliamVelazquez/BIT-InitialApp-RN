//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralBlueLayout from '../components/general-blue-layout';
import Header from '../../sections/components/header';
//import UserContactInfoForm from '../../forms/user-contact-info-form';
import UserContactInfoForm from '../../forms/contact-form';

class Contact extends Component{
	render() {
		return (
			<GeneralBlueLayout>
				<Header sectionTitle="Contactanos!" />
				<UserContactInfoForm 
          navigation={this.props.navigation}
        />
			</GeneralBlueLayout>
		);
	}
}

export default Contact;