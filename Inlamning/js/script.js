// https://randomuser.me/api/ 

//på webbplatsen ska visas:
//gender, email, phone, name.first, name.last

async function getRandomUser(){
    const response = await fetch ("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}

function displayUser(user){


    let name = document.getElementById('name');
    let gender = document.getElementById('gender');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let image = document.getElementById('image');



 name.innerText = `${user.name.title} ${user.name.first}${user.name.last}`;
 gender.innerText = `${user.gender}`;
 email.innerText = `${user.email}`;
 phone.innerText = `${user.phone}`;
 image.setAttribute('src', `${user.picture.large}`);

}

getRandomUser()
