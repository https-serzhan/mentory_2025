document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('change', println);
});


document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); // Prevent form submission to server

    let Data = {
        login: document.querySelector('#login').value,
        password: document.querySelector('#password').value,
        faculty: document.querySelector('#faculty').value,
        feedback: document.querySelector('#feedback').value
    };
    console.log(Data);
    alert('Data sent successfully!');
    document.querySelector('form').reset();
});


function println(e){
    console.log(`${e.target.value}`);
};

