import axios from 'axios';
const host = 'http://localhost/biye/BodyPratice/php/';
// const host = 'http://test.api.aiyyou.com';

// 登录
export async function Login (params) {
  return await axios.get(`${host}login.php`,params,{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }); 
}

// 注册
export async function Register (params) {
  return await axios({
    method:'GET',
    url:host+'',
    params:{
      id:params.id
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}





