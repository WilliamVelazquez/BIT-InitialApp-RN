//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import Header from '../../sections/components/header';
//import UserContactInfoForm from '../../forms/user-contact-info-form';
import UserContactInfoForm from '../../forms/contact-form';

class Contact extends Component{
	render() {
		return (
			<GeneralLayout>
				<Header sectionTitle="Contactanos!" />
				<UserContactInfoForm 
          navigation={this.props.navigation}
        />
			</GeneralLayout>
		);
	}
}

export default Contact;