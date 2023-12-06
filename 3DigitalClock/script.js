setInterval(() => {
    let date = Date().slice(16,24)
    document.getElementById('clock').innerHTML = `${date}`
}, 1000)