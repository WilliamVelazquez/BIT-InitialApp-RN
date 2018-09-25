const BASE_API = 'https://test.mx/api/v1/';

class Api{
  async sentContactInfo(data){
    const query = await fetch(`${BASE_API}contact_info.json?data?${data}`);
    const data = query.json();
    return data;
  }
}

export default new Api();