let cl = console.log;

const navigation = document.getElementById("navigation");
const navToggle = document.getElementById("nav-toggle");


const onClickHandler = () =>{
    navigation.classList.toggle("active");
}



navToggle.addEventListener("click", onClickHandler);