//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import GeneralHeader from '../../sections/components/general-header';
import ProductForm from '../../forms/product-form';

class Product extends Component{
	static navigationOptions = ({navigation}) => {
    return {
      header: <GeneralHeader sectionTitle="Tu producto/servicio" withBack={true} handleBack={()=>{navigation.goBack()}}/>
    }
  };
	render() {
		return (
			<GeneralLayout>
				<ProductForm 
          navigation={this.props.navigation}
        />
			</GeneralLayout>
		);
	}
}

export default Product;