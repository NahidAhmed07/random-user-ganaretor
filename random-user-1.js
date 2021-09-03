
const header = document.getElementById('user-header');
const title = document.getElementById('user-title');

const loadData = async () => {

    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    const img = document.getElementById('user-img');
    img.src = user.picture.large;

    title.innerText = "Hi, My name is"
    const name = user.name.first + " " + user.name.last;
    header.innerText = name;

    const addr = `${user.location.city}-${user.location.state}-${user.location.country} `

    document.getElementById('user').setAttribute('onmouseover', `setItem("${name}", "Hi, My name is")`)
    
    document.getElementById('email').setAttribute('onmouseover', `setItem('${user.email}', 'Hi, My Email is')`)
    
    document.getElementById('date').setAttribute('onmouseover', `setDate('${user.dob.date}')`)
    
    document.getElementById('map').setAttribute('onmouseover', `setItem('${addr}','Hi, My Address is')`)
    
    document.getElementById('phone').setAttribute('onmouseover', `setItem('${user.phone}','Hi, My Phone Number is')`)
    
    document.getElementById('password').setAttribute('onmouseover',  `setItem('${user.login.password}','Hi, My Password is')` ) 
}


loadData();

const btn = document.getElementById('next-btn');
    btn.addEventListener('click', () => {
        loadData();
    })
function setItem(text, titles) {
    title.innerText = titles;
    header.innerText = text;
}
function setDate(tarikh) {
    title.innerText = 'Hi, My Date of Birth is';
    const date = tarikh.slice(0, 10);
    header.innerText = date.split('-').join("/");

}
 
