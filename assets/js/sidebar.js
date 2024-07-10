var burger = document.getElementById('burger')
var sideBar = document.getElementsByClassName('sideBar')
var bigSideBar = document.getElementById('bigSideBar')
var arrowBack = document.getElementById('arrowBack')

// ouvre le menu au clic sur le menu burger 
burger.addEventListener('click', ()=>{
    
    bigSideBar.classList.toggle('bigSideBarActif')
    
})
// ferme le menu au clic sur la fleche
arrowBack.addEventListener('click', ()=>{
    bigSideBar.classList.toggle('bigSideBarActif')
    
})


