let users = JSON.parse(localStorage.getItem('user')) || [];


const output = (users) => {
    document.getElementById("output").innerHTML = ""

    let temp = ``
    users.map((ele, user) => {
        temp += `
        <div>
        <img src=${ele.img} alt =""  class="img">
        <h3>Name : ${ele.name}</h3>
      
        <p> Price: ${ele.Number} $</P>
        <button> Add to cart</button>
       
      
        </div>
        `
    })
    document.getElementById("output").innerHTML = temp;
}
output(users)

const userdata = (e) => {
    e.preventDefault();
    let user = {
        img: document.getElementById("img").value,
        name: document.getElementById("name").value,
        Number: document.getElementById("number").value,

    };
   
    users.push(user);
    // console.log(users);
    localStorage.setItem("user", JSON.stringify(users));
    output(users)
}
document.querySelector("form").addEventListener("submit", userdata);
//sorting byprice

const handlelth =() =>{
    let data = users.sort((a,b)=> a.number - b.number);
   output(data);
    console.log(data);
}
document.getElementById ("lth").addEventListener("click",handlelth);

const handlehtl =() =>{
    let data = users.sort((a,b)=> b.number - a.number);
    output(data);
    console.log(data); 
}
document.getElementById ("htl").addEventListener("click",handlehtl);


//search by name 
const find =()=>{
    let value = document.getElementById(value).value;
    let data = Products.fillter ((val)=>val.title.include(value.tolowercase()));
    console.log(data);

    ul(data);

}
// document.getElementById("value").addEventListener("keypress"(e) =>{
//     if(e.key=="enter"){
//         find();
//     }
// });
document.getElementById("search").addEventListener("click",find);