let users = JSON.parse(localStorage.getItem('user')) || [];


const ui = () => {
    document.getElementById("output").innerHTML = ""

    let temp = ``
    users.map((ele, index) => {
        temp += `
        <div class="div">
        <img src=${ele.img} alt =""  class="img">
        <h3>Name : ${ele.name}</h3>
      
        <p> Price: ${ele.Number} $</P>
        <button class="update"> Add to cart</button>
       
      
        </div>
        `
    })
    document.getElementById("output").innerHTML = temp;
}
const userdelete = (id) => {
    console.log(users);
    users.splice(id, 1);
    ui(users)
}
const userdata = (e) => {
    e.preventDefault();
    let user = {
        img: document.getElementById("img").value,
        name: document.getElementById("name").value,
        Number: document.getElementById("number").value,

    };
   
    users.push(user);
    console.log(users);
    localStorage.setItem("user", JSON.stringify(users));
    ui(users)
}
document.querySelector(".form").addEventListener("submit", userdata);
//sorting byprice

const handleth =() =>{
    let data = products.sort((a,b)=> a.price - b.price);
    ui(data);
    console.log(data);
}
document.getElementById ("lth").addEventListener(("click",handleth));

const handleth1 =() =>{
    let data = products.sort((a,b)=> b.price - a.price);
    ui(data);
    console.log(data);
}
document.getElementById ("htl").addEventListener(("click",handleth1));
