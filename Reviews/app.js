// local reviews data
const reviews = [
    {
        id:1,
        name:"Susan Smith",
        job:"web delveloper",
        img:"./person-2.jpg",
        text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor quod non error minus, ut harum eligendi doloremque, 
        officiis, iste aspernatur quisquam quis!
        Dolores, accusamus! Rerum similique explicabo unde nulla 
        consectetur.`
    },
    {
        id:2,
        name:" smith",
        job:"UX designer",
        img:"./person-3.jpg",
        text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor  aspernatur quisquam quis!
        Dolores, accusamus! Rerum similique explicabo unde nulla 
        consectetur.`
    },
    {
        id:3,
        name:"Anna Johnsson",
        job:"web designer",
        img:"./person-4.jpg",
        text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor quod non error minus, ut harum eligendi doloremque.`
    },
    {
        id:4,
        name:"susan smith",
        job:"intern",
        img:"./person-1.jpg",
        text:`arum eligendi doloremque, 
        officiis, iste aspernatur quisquam quis!
        bo unde nulla consectetur.`
    }
]

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const btnPrev = document.querySelector(".prev-btn");
const btnNext = document.querySelector(".next-btn");
const btnRandom = document.querySelector(".random-btn");

// set current item
// we would like this item to show when thepage loads
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(event){
    console.log(event);

    showPerson();
});

// Lets show wperson base on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show nextperson
btnNext.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }else{
        showPerson();
    }
    
});

// Show prevoius person
btnPrev.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }else{
        showPerson();
    }
    
});

// Show random person
btnRandom.addEventListener("click",function(){
    // the range shoul be 0 and 3 -> the length of the reviews array
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson();

});