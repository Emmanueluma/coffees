let searchIcon, searchMenu, ulClose, ul, barIcons, cart, cartIcon, barIcons0, ul01, errorMessage, errorBtn, theName, theEmail, theNumber,
from, theNameDiv, theEmailDiv, theNumberDiv, domHtml, whatsappMain, whatsappFloatingIcon, whatsappClose, line, scrolled;

searchIcon = document.getElementById('searchIcon');
searchMenu = document.getElementById('searchMenu');
ulClose = document.getElementById('ulClose');
ul = document.getElementById('ul');
barIcons = document.getElementById('barIcons');
barIcons0 = document.getElementById('barIcons0');
ul01 = document.getElementById('ul01');
cart = document.getElementById('cart');
cartIcon = document.getElementById('cartIcon');
form = document.getElementById('form010');
errorMessage = document.getElementById('errorMessage');
errorBtn = document.getElementById('errorBtn');
theName = document.getElementById('theName');
theEmail = document.getElementById('theEmail');
theNumber = document.getElementById('theNumber');
//div
theNameDiv = document.getElementById('theNameDiv');
theEmailDiv = document.getElementById('theEmailDiv');
theNumberDiv = document.getElementById('theNumberDiv');



form.addEventListener('submit', e => {
    e.preventDefault();
});
theName.style.textTransform = 'capitalize';
errorBtn.addEventListener('click', e => {
    /* let name, email, number, msg, suc;
    theName.value == '' ? name = 'your name is empty.': name ='';
    theEmail.value == '' ? email = 'your email is empty.': email ='';
    theNumber.value == '' ? number = 'your number is empty.': number ='';
    if(theName.value != '',theEmail.value != '', theNumber.value != '') {
        msg = 'Successful'
        errorMessage.style.color= "green";
    }else {
        msg = `error => ${name} ${email} ${number}`;
        errorMessage.style.color= "red";
    }
    errorMessage.textContent = msg; */

    /* let name, email, number, msg, suc; */
    let msg;
    theName.value == '' ? theNameDiv.style.borderColor = "red" : theNameDiv.style.borderColor = "green";
    theEmail.value == '' ? theEmailDiv.style.borderColor = "red" : theEmailDiv.style.borderColor = "green";
    theNumber.value == '' ? theNumberDiv.style.borderColor = "red" : theNumberDiv.style.borderColor = "green";

    if(theName.value != '',theEmail.value != '', theNumber.value != '') {
        msg = 'Successful';
        setTimeout(() => {
            errorMessage.textContent = '';
            theNameDiv.style.borderColor = '#fff';
            theNumberDiv.style.borderColor = '#fff';
            theEmailDiv.style.borderColor = '#fff';
            theName.value = '';
            theNumber.value = '';
            theEmail.value = '';
        }, 500)
        errorMessage.textContent = msg;
    }
});




searchIcon.addEventListener('click', e => {
    searchMenu.classList.toggle('active');
    searchIcon.classList.toggle('fa-close');

});

cartIcon.addEventListener('click', e => {
    cart.classList.toggle('active');
    cartIcon.classList.toggle('fa-close');

});

barIcons.addEventListener('click', e => {
    ul.classList.toggle('active');
    barIcons.classList.toggle('fa-close');
});

barIcons0.addEventListener('click', e => {
    ul01.classList.toggle('active');
    barIcons0.classList.toggle('fa-close');
});


ulClose.addEventListener('click', e => {
    ul.classList.toggle('active');
});

whatsappMain = document.getElementById('whatsappMain');
whatsappFloatingIcon = document.getElementById('whatsappFloatingIcon');
whatsappClose = document.getElementById('whatsappClose');
line = document.getElementById('line');

whatsapp(whatsappFloatingIcon);
whatsapp(whatsappClose);

function whatsapp(ele) {
    ele.addEventListener('click', () => {
        whatsappMain.classList.toggle('active');
        line.classList.toggle('active');
    });
}
let lastscroll = window.screenY;
window.addEventListener('scroll', e => {
    ul.classList.remove('active');
    ul01.classList.remove('active');
    barIcons.classList.remove('fa-close');
    barIcons0.classList.remove('fa-close');
    cart.classList.remove('active');
    cartIcon.classList.remove('fa-close');
    searchMenu.classList.remove('active');
    searchIcon.classList.remove('fa-close');
    whatsappMain.classList.remove('active');
    if (lastscroll < window.scrollY) {
        /* console.log('we are going down') */
        whatsappFloatingIcon.style.display = 'none';
    }else{
        /* console.log('we are going up'); */
        whatsappFloatingIcon.style.display = 'flex';
    }
    lastscroll = window.scrollY;
});



suc = '<div class="container"><div class="img"><img src="images/menu-%0%.png" alt="" ></div><div class="text"><h3>%tasty%</h3><p>$<b class="b">%15.99%</b>/</p></div><div class="delete"><i class="fas fa-close"></i></div></div>';
suc1 = '<div class="container"><div class="img"><img src="images/product-%0%.png" alt="" ></div><div class="text"><h3>%tasty%</h3><p>$<b class="b">%15.99%</b>/</p></div><div class="delete"><i class="fas fa-close"></i></div></div>';


let btn1cart, btn2cart, btn3cart, btn4cart, btn5cart, btn6cart, btn7cart, btn8cart, btn9cart,total, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, sum,
p1, p2, p3, p4, p5, p6, p7, p8, p9, items, smile, inc, b,cartBa,pop;
pop = document.querySelector('.pop');
total = document.getElementById('total');
items = document.getElementById('items');
cartBa = document.getElementById('cartBa');
inc = 0;
total.textContent = 0;

items.textContent = inc;

sum = 0

btn1cart = suc.replace('%0%',1);
btn2cart = suc.replace('%0%',2);
btn3cart = suc.replace('%0%',3);
btn4cart = suc.replace('%0%',4);
btn5cart = suc.replace('%0%',5);
btn6cart = suc.replace('%0%',6);
btn7cart = suc1.replace('%0%',1);
btn8cart = suc1.replace('%0%',2);
btn9cart = suc1.replace('%0%',3);



btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');
btn7 = document.getElementById('btn7');
btn8 = document.getElementById('btn8');
btn9 = document.getElementById('btn9');

p1 = parseFloat(document.getElementById('p1').innerText);
p2 = parseFloat(document.getElementById('p2').innerText);
p3 = parseFloat(document.getElementById('p3').innerText);
p4 = parseFloat(document.getElementById('p4').innerText);
p5 = parseFloat(document.getElementById('p5').innerText);
p6 = parseFloat(document.getElementById('p6').innerText);
p7 = parseFloat(document.getElementById('p7').innerText);
p8 = parseFloat(document.getElementById('p8').innerText);
p9 = parseFloat(document.getElementById('p9').innerText);

pp1 = document.getElementById('pp1');
pp2 = document.getElementById('pp2');
pp3 = document.getElementById('pp3');
pp4 = document.getElementById('pp4');
pp5 = document.getElementById('pp5');
pp6 = document.getElementById('pp6');

h2_1 = document.getElementById('h2-1');
btn1cart = btn1cart.replace('%tasty%', h2_1.innerText);
h2_2 = document.getElementById('h2-2');
btn2cart = btn2cart.replace('%tasty%', h2_2.innerText);
h2_3 = document.getElementById('h2-3');
btn3cart = btn3cart.replace('%tasty%', h2_3.innerText);
h2_4 = document.getElementById('h2-4');
btn4cart = btn4cart.replace('%tasty%', h2_4.innerText);
h2_5 = document.getElementById('h2-5');
btn5cart = btn5cart.replace('%tasty%', h2_5.innerText);
h2_6 = document.getElementById('h2-6')
btn6cart = btn6cart.replace('%tasty%',h2_6.innerText);
h2_7 = document.getElementById('h2-7');
btn7cart = btn7cart.replace('%tasty%',h2_7.innerText);
h2_8 = document.getElementById('h2-8');
btn8cart = btn8cart.replace('%tasty%',h2_8.innerText);
h2_9 = document.getElementById('h2-9');
btn9cart = btn9cart.replace('%tasty%',h2_9.innerText);



let list = []





updateCart(btn1,btn1cart,p1);
updateCart(btn2,btn2cart,p2);
updateCart(btn3,btn3cart,p3);
updateCart(btn4,btn4cart,p4);
updateCart(btn5,btn5cart,p5);
updateCart(btn6,btn6cart,p6);
updateCart(btn7,btn7cart,p7);
updateCart(btn8,btn8cart,p8);
updateCart(btn9,btn9cart,p9);
function updateCart(btn,btncart,p){
    btncart = btncart.replace('%15.99%', p);
    btn.addEventListener('click', e => {
        /* list.push(btncart);
        for (let i = 0; i < list.length; i++) {
            list[i] == btncart
            console.log(404)
            
        }
        console.log(list) */
        pop.style.display = "flex";
        setTimeout(e => {
            pop.style.display = "none"
        }, 1000)
        items.textContent = ++inc;
        cartBa.textContent = inc;
        cart.insertAdjacentHTML('beforeend',btncart);
        b = document.getElementById('b');
        sum += p;
        total.innerText = sum.toFixed(2);
    });
}

cart.addEventListener('click', e => {
    let i;
    i = e.target.parentNode.getElementsByTagName('i')[0];
    if(e.target == i){
        let tar,rem, exp;
        exp = parseFloat(e.target.parentNode.parentNode.getElementsByTagName('b')[0].innerText);
        sum -= exp;
        if(sum < 0){
            total.textContent = 0;
        }else {
            total.innerText = sum.toFixed(0);
        }
        items.textContent = --inc;
        cartBa.textContent = inc;
        tar = e.target.parentNode.parentNode.parentNode;
        rem = e.target.parentNode.parentNode;
        tar.removeChild(rem);
    }
});







let seen1 = document.getElementsByClassName('fa-eye-slash');
for (let i = 0; i < seen1.length; i++) {
    seen(seen1[i]);
}
function seen(seen) {
    seen.addEventListener('click', () => {
        seen.classList.toggle('fa-eye');
        let eu = seen.parentNode.parentNode.querySelector('.bottom').getElementsByTagName('h3')[0];
        if(eu.style.opacity == 0) {
            eu.style.opacity = 1;
        } else if(eu.style.opacity == 1) {
            eu.style.opacity = 0;
        }
    });
}


let like1 = document.getElementsByClassName('fa-heart');
for (let i = 0; i < like1.length; i++) {
    like(like1[i]);
}
function like(like){
    like.addEventListener('click', () => {
        if(like.style.color == '') {
            like.style.color = 'var(--main-color)';
        } else if(like.style.color == 'var(--main-color)') {
            like.style.color = '';
        }
        like.style.fontSize = '3.5rem';
        setTimeout(() =>{
            like.style.fontSize = '1.2rem';
        },500);
        console.log(1)
    });
}

let date = document.getElementsByClassName('date');
for (let i = 0; i < date.length; i++) {
    let date1 = new Date().getDate();
    let month = new Date().getMonth();
    let months = ['jan','feb', 'mar','apr','may', 'june', 'july', 'aug', 'sep', 'oct', 'nov' , 'dec'];
    let year = new Date().getFullYear();
    date[i].textContent = `${date1}, ${months[month]} ${year}`;
}



