let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);


function inputMsg() {
    // alert("Namaste world");
    let name = prompt('Enter name your student');
    namsteBtn.textContent = 'Roll NO. 1:' +name;
}