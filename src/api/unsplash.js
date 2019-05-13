import axios from 'axios';


export default axios.create ({
  baseURL: 'https://api.unsplash.com/',

  headers: {
    Authorization:'Client-ID ecafe18832f6882a158fae0cefc5e646c224fc58874814c980826ffb27be3871 '


  }
});