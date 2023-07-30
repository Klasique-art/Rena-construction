// aos initialisation
AOS.init({
    offset: 100,
    delay: 100,
    duration: 700,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})
// ======= nav links stay highlighted when clicked
// assigning variables
const navlist = document.querySelectorAll(".nav-list a")
navlist.forEach((link)=>{
    link.addEventListener("click", highlightLink)
})

function highlightLink() {
    navlist.forEach((link)=>{
        link.classList.remove("highlight")
        this.classList.add("highlight")
    })
}
// ======== the buttons in the navbar 
// assigning variables
const bgOverlay = document.querySelector(".info-bg-overlay")
const infoWrapper = document.querySelector(".info-wrapper")
const infoContainer = document.querySelector(".info-container")
const infoBtn = document.querySelector(".icon-box .info-btn")
const searchBtn = document.querySelector(".icon-box .search-btn")
const loginBtn = document.querySelector(".icon-box .login-btn")
const menuBtn = document.querySelector(".icon-box .menu-btn")
const mobileNav = document.querySelector("nav .nav-list")
const searchForm = document.querySelector(".search-form")
const closeInfoBtn = document.querySelector(".close-info-btn")
const loginWrapper = document.querySelector(".login-wrapper")

//deactivate info on scroll
window.addEventListener("scroll", ()=>{
    if(scrollY > 0) {
        deactivateInfo()
        deactivateSearch()
        deactivateLogin()
        deactivateMobileNav()
    }
})

// event listeners btn
infoBtn.addEventListener("click", activateInfo)
closeInfoBtn.addEventListener("click", deactivateInfo)
searchBtn.addEventListener("click", activateSearch)
loginBtn.addEventListener("click", activateLogin)
menuBtn.addEventListener("click", activateMobileNav)

function activateInfo() {
    bgOverlay.classList.add("active")
    infoWrapper.classList.add("active")
    infoContainer.classList.add("active")
}
function deactivateInfo() {
    bgOverlay.classList.remove("active")
    infoWrapper.classList.remove("active")
    infoContainer.classList.remove("active")
}
function activateSearch() {
    searchForm.classList.toggle("active")
    deactivateLogin()
    deactivateMobileNav()
}
function deactivateSearch() {
    searchForm.classList.remove("active")
}
function activateLogin() {
    loginWrapper.classList.toggle("active")
    deactivateSearch()
    deactivateMobileNav()
}
function deactivateLogin() {
    loginWrapper.classList.remove("active")
}
function activateMobileNav() {
    mobileNav.classList.toggle("active")
    deactivateLogin()
    deactivateSearch()
}
function deactivateMobileNav() {
    mobileNav.classList.remove("active")
}
// ======================reviews section=========
// assigning variables
const clientImg = document.getElementById("client-img")
const clientName = document.getElementById("client-name")
const clientText = document.getElementById("client-text")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

// storing client info in an array as objects
const clients = [
    {
        name: "daniel quainoo",
        img: "img/clients/pic-1.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quaerat numquam debitis dolore rem necessitatibus quis, molestiae ullam odio illo magni distinctio. Tempore explicabo corrupti beatae reiciendis, et officia adipisci."
    },
    {
        name: "regina ragua",
        img: "img/clients/pic-2.png",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corporis, nobis iure ducimus cupiditate rerum excepturi sit et reprehenderit explicabo alias, atque tempore delectus deserunt, fuga eligendi. Eligendi, doloribus itaque."
    },
    {
        name: "manny boakye",
        img: "img/clients/pic-3.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis inventore deleniti quidem fugit nam sapiente alias voluptate illo, fugiat soluta saepe repellat optio, nulla quia cumque nesciunt eius in?"
    },
    {
        name: "stella affram",
        img: "img/clients/pic-4.png",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque accusantium, atque expedita voluptatibus sequi, sit voluptatem vel quod praesentium corrupti quaerat incidunt officia a beatae consectetur adipisci iste fugiat cupiditate."
    },
    {
        name: "kobina nunoo",
        img: "img/clients/pic-5.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea consequatur corporis adipisci voluptas. Natus minus fuga ad rem, et quisquam temporibus laudantium quaerat omnis voluptates error, soluta eius commodi?"
    },
    {
        name: "berlinda grace",
        img: "img/clients/pic-6.png",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet veniam rem, commodi distinctio nostrum dolorum tempora consequuntur quisquam quo perferendis excepturi omnis culpa, nihil fuga explicabo dicta incidunt odit!"
    }
]

let currentClient = 0

// show 1st person when page loads
window.addEventListener("DOMContentLoaded", showClient(currentClient))

// the prev and next buttons
prevBtn.addEventListener("click", changePrev)
nextBtn.addEventListener("click", changeNext)

// fn to display client info
function showClient(person) {
    const client = clients[person]
    clientImg.src = client.img
    clientName.innerText = client.name
    clientText.innerText = client.text
} 
// fn to change to prev client
function changePrev() {
    currentClient--
    if(currentClient < 0) {
        currentClient = clients.length - 1
    }
    showClient(currentClient)
}
// fn to change to next client
function changeNext() {
    currentClient++
    if(currentClient > clients.length) {
        currentClient = 0
    }
    showClient(currentClient)
}

// change review automatically after 5s
setInterval( ()=>{
    changeNext()
}, 5000);


