 
//  for spinner 
 window.addEventListener('load',function(){
            document.querySelector('.spinner-parent').style.display = 'none'
})

// radio button
function radio() {

    const userParent = document.querySelector('.user-parent').innerHTML = "";
    

    const genderInput = document.querySelector(`input[name="gender"]:checked`)
    const gender = genderInput.value
    // filterUser(gender);
    return genderInput.value;
}




function filterUser(gender) {
     // filtering option script 
    const userParent = document.querySelector('.user-parent');
    if (gender == 'male') {
        const users = userParent.children;

        for (const user of users) {
            const x = user.children[6].innerText;
            const i = x.slice(9, x.lenght);
            const d = user.style.display;

            if (i=='male') {
                user.style.display = 'block';
            } else {
                user.style.display = 'none';
            }

             if (d == 'none') {
                user.style.display = 'block';
            }
        }
        
        
    } else if (gender == 'female') {

        const users = userParent.children;
        for (const user of users) {
            const x = user.children[6].innerText;
            const i = x.slice(9, x.lenght);
            const d = user.style.display;
            
            if (i=='female') {
                user.style.display = 'block';
            } else {
                user.style.display = 'none';
            }
            if (d == 'none') {
                user.style.display = 'block';
            }
        }
        // loadUser() 
        
    }
    else if (gender == 'both') {
         const users = userParent.children;
        for (const user of users) {
            const d = user.style.display;
            if (d == 'none') {
                user.style.display = 'block';
            }
        }
    }
} 


// data loading function 
function loadUser() {
    const gender = radio();
    
    for (let i = 1; i <= 10; i++){
    fetch('https://randomuser.me/api/')
        .then(res=> res.json())
        .then(data => {
            if (gender == 'male') {
               if (data.results[0].gender == 'male') {
                displayUser(data.results[0])
                }
            } else if (gender == 'female') {
                if (data.results[0].gender == 'female') {
                displayUser(data.results[0])
                }
            } else if (gender == 'both') {
                displayUser(data.results[0])
            }
        })
        .catch(err => console.log(err))
    }
}

loadUser();
       
function displayUser(user) {
    const div = document.createElement('div');
    div.classList.add('user');
    div.innerHTML =`
    <img class="user-img" src="${user.picture.large}" alt="">
    <p class="user-info"> Name : ${user.name.title} ${user.name.first} ${user.name.last}</p>
    <p class="user-info"> Email : ${user.email}</p>
    <p class="user-info"> phone : ${user.phone} </p>
    <p class="user-info"> Location : ${user.location.state} - ${user.location.city} </p>
    <p class="user-info"> country : ${user.location.country} </p>
    <p class="user-info gender"> gender : ${user.gender} </p>
    <button onclick= "showUser()" class="user-btn" > see more... </button> 
    `;
    document.querySelector('.user-parent').appendChild(div);
}


