window.onload = () => {
    setTimeout(() => {
        fetch('/api/editUser').then((data) => {
            console.log(data);
        })
    },2000)
    
}