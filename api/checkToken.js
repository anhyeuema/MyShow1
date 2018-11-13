
const checkToken = (token) => {
    return fetch('http://192.168.0.102:81/api/check_token.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
            token: token
        })
    })
    .then(res => res.token())
}
module.exports = checkToken;