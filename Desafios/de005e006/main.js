const sla = () => {
    fetch("https://api.ipify.org?format=json")
    .then(response => {
        if (!response.ok) {
            console.log("erro");
        }
        return response.json();
    })
    .then(data => {
        alert(data.ip)
    })
};