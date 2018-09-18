//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import GeneralLayout from '../components/general-layout';
import GeneralHeader from '../../sections/components/general-header';
import ProjectInfoForm from '../../forms/project-info-form';

class ProjectInfo extends Component{
	static navigationOptions = ({navigation}) => {
    return {
      header: <GeneralHeader sectionTitle="Cuentanos de tu proyecto" withBack={true} handleBack={()=>{navigation.goBack()}}/>
    }
  };
	render() {
		return (
			<GeneralLayout>
				<ProjectInfoForm 
          navigation={this.props.navigation}
        />
			</GeneralLayout>
		);
	}
}

export default ProjectInfo;