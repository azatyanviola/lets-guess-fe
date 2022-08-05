
/* eslint-disable no-undef */
const btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    location.href = '/user-login/user-login.html';
};
const btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    location.href = '../registration/registration.html';
};
const btn3 = document.getElementById('btn3');
btn3.onclick = async function () {
   const data = await fetch('http://localhost:3000/testapi', {method: 'GET'})
    const respons = await data.json()

    console.log('response data ', respons)
};

