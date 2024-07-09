var burger = document.getElementById('burger')
// var bSliceTop = document.getElementById('bSliceTop')
// var bSliceMiddle = document.getElementById('bSliceMiddle')
// var bSliceBottom = document.getElementById('bSliceBottom')
var sideBar = document.getElementsByClassName('sideBar')
var bigSideBar = document.getElementById('bigSideBar')
var arrowBack = document.getElementById('arrowBack')

// ouvre le menu au clic sur le menu burger 
burger.addEventListener('click', ()=>{
    
    bigSideBar.classList.toggle('bigSideBarActif')
    // sideBar[0].style.display = 'none'
})
// ferme le menu au clic sur la fleche
arrowBack.addEventListener('click', ()=>{
    bigSideBar.classList.toggle('bigSideBarActif')
    // sideBar[0].style.display = 'flex'
})
