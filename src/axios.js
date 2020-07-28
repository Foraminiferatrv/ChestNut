import axios from 'axios';

const instanse = axios.create( {
  baseURL: 'https://chestnut-8ecfb.firebaseio.com'
} );

export default instanse;