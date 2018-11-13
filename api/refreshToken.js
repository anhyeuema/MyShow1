import saveToken from './saveToken';
import getToken from './getToken';

const getNewToken =  (token) => (
    fetch('http://192.168.0.102:81/api/refresh_token.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
            token:token
        })
    })
    .then(res => res.text())
)

const refreshToken = async () => {
    try {
        const token = await getToken();
        if( token === '' || token ==='TOKEN_KHONG_HOP_LE'){
            console.log(token);
        }
        else{
            const newToken = await getNewToken(token);
            await saveToken(newToken);
            console.log('TOKEN MOI :' + newToken);
        }
        
    } catch {

    }
}
export default refreshToken;