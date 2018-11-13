const initData = () => (
    fetch('http://192.168.0.100:81/api/index.php', {
            
    })
    .then(res => res.json())
);

export default initData;