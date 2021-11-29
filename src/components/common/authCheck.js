
export const getToken = () => {

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    let userType = ''
    if (userToken){
       userType = userToken.data.role_id
    }
    
    console.log(userToken);
    console.log(userType);
    return {userToken,userType}
  }