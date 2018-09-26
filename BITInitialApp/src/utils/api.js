const BASE_API = 'http://hayd.us-west-1.elasticbeanstalk.com/rest/';

class Api{
  async saveContactInfo(data){
  	try {
      const response = await fetch(
        `${BASE_API}contact/saveNewContact`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
          //body: JSON.stringify({})
        }
      );
      
      if (!response.ok) {
        //console.log("Status-->" + response.status + " | Error: " + response.statusText);
        console.log("response-->",response);
        //throw Error(response.statusText);
      }
      else{
        console.log("response-->",response);
        const responseJSON = await response.json();
        console.log("responseJSON-->",responseJSON);
        //jsonResultado: Array(34), msg: "ok", cod: 0, salt: "Thu Jul 05 18:37:50 CDT 2018"
        //const entidades = await responseJSON.jsonResultado;
        //DEBUG->console.log("entidades-->",entidades);
        // this.setState({
        // 	entidades,
        // 	loading: false
        // });
        //console.log("finalStateDisp",this.state);
      }
    } catch (error) {
      console.log("Error: " + error);
      //this.setState({loading:false});
    }
    //const query = await fetch(`${BASE_API}contact/saveNewContact?data?${data}`);
    //const data = query.json();
    return true;
  }
}

export default new Api();