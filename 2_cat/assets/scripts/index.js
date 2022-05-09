class Cat {
    constructor(petname, weight, owner, surname, phone, email, feed, comment) {
        this.petname = petname;
        this.weight = weight;
        this.owner = owner;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
        this.feed = feed;
        this.comment = comment;
    }
}

const button = document.querySelector(".button");
button.addEventListener("click", createObject);

function createObject() {
    let petname = document.querySelector("#petname").value;
    let weight = document.querySelector("#weight").value;
    let owner = document.querySelector("#owner").value;
    let surname = document.querySelector("#surname").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;

    let foods = document.querySelectorAll(".feed");
    let feed = [];
    for (let food of foods) {
        if (food.checked) {
            feed.push(food.value);
        }
    }

    let comment = document.querySelector("#comment").value;

    let cat1 = new Cat(petname, weight, owner, surname, phone, email, feed, comment);
    console.log(cat1);
}