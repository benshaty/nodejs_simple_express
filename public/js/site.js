/*
crud for users
crud for partners
bootstrap table sorter , pageing , search ...
*/

window.onload = () => {
    setTimeout(() => {
        fetch('/api/getPartners').then(res => res.json()).then(res=> console.log(res));
        fetch('/api/getUsers').then(res => res.json()).then(res=> console.log(res));
    },2000)
    
}