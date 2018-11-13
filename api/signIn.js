const signIn = (email, password) => {
    return fetch('http://192.168.0.102:81/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
             email: email, password: password
        })
    })
    .then(res => res.json())
};
module.exports = signIn;