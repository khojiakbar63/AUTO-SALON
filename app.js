// CALL JS TO HTML
let loginForm = document.querySelector('#login-form');
let usernameInput = document.querySelector("#username-input");
let emailInput = document.querySelector("#email-input");
let showBtns = document.querySelector("#show-btns");
// ------FIVE BUTTONS-----
let freeSpace = document.querySelector('#free-space')
let addForm = document.querySelector('#add-form')
let addBtn = document.querySelector('#add-btn');
let showBtn = document.querySelector('#show-btn');
let deleteBtn = document.querySelector('#delete-btn');
let deleteCrossBtn = document.querySelector('#delete-cross');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('#search-form')
let searchIcon = document.querySelector('#search-icon')
let searchInput = document.querySelector('#search-input')
let sortBtn = document.querySelector('#sort-btn')
let sortBy = document.querySelector('#sort-by')
let sortBtnIcon = document.querySelector('#sort-btn-icon')
// Add form inputs
// -------......
// .
// -----.....

// FUNCTIONS


// Show buttons function
const showButtons = (e) => {
    e.preventDefault()
    // Fix lower two line below and put required to submit login buttons
    if(usernameInput.value.trim() != '' && emailInput.value.trim() != '') {
        showBtns.classList.add('show');
        loginForm.classList.add('hide')
        exitBtn.classList.add('show')
    }else{
        alert("Fill the form!")
    }
    loginForm.reset()
}
// Show add form function
const showFormFunc = () => {
    console.log(1);
    addForm.classList.add('show-block')
    freeSpace.innerHTML = ``

}
// Submit add form function
const submitAddForm = (e) => {
    e.preventDefault();
// add id with random number 6 digit
    const id = Math.floor(Math.random() * 1000000);
    const name = carNameInput.value;
    const model = carModelInput.value;
    const color = carColorInput.value;
    const year = carYearInput.value;
    const price = carPriceInput.value;
    const stock = carStockInput.value;

// Object create
    const newCar = {
        id: id,
        name: name,
        model: model,
        color: color,
        year: year,
        price: price,
        stock: stock,
    }

    All_CARS = JSON.parse(localStorage.getItem('Cars')) || [];
    All_CARS.push(newCar);
    localStorage.setItem('Cars', JSON.stringify(All_CARS))
    addForm.reset()
}
// Show car list function
const showCarList = () => {
    wrapperStyle.classList.add('orangeBg')
    addForm.classList.remove('show-block')
    freeSpace.innerHTML = '';
    freeSpace.innerHTML = `
    <h4 class='show-car-list'>Available Cars List</h4>
    <br>
    `
    All_CARS.forEach(car => {
        freeSpace.innerHTML += `
            <div>
                <h5 class='show-car-list'>ID:     ${car.id}</h5>
                <h5 class='show-car-list'>Name:   ${car.name}</h5>
                <h5 class='show-car-list'>Model:  ${car.model}</h5>
                <h5 class='show-car-list'>Color:  ${car.color}</h5>
                <h5 class='show-car-list'>Year:   ${car.year}</h5>
                <h5 class='show-car-list'>Price:  $${car.price}</h5>
                <h5 class='show-car-list'>Stock:  ${car.stock}</h5>
                <br>
            </div>
       
        `
    });
}
// Delete car function
const deleteCar = () => {
    All_CARS.forEach(car => {
        if(car.id == deleteInput.value) {
            All_CARS.splice(car, 1)
            localStorage.setItem('Cars', JSON.stringify(All_CARS))
            showCarList()
        }
    })
}
// Toggle delete form function
const toggleDeleteForm = () => {
    deleteForm.classList.toggle('show-block')
}
// Toggle search form function
const toggleSearchForm = () => {
    searchForm.classList.toggle('show-block')
}
// Search car function
const searchCar = () => {
     let wantedCar = All_CARS.find(car => car.name == searchInput.value)
     if(wantedCar) {
         freeSpace.innerHTML = `
         <h5 class='show-car-list'>ID:      ${wantedCar.id}</h5>
         <h5 class='show-car-list'>Name:   ${wantedCar.name}</h5>   
         <h5 class='show-car-list'>Model:  ${wantedCar.model}</h5>
         <h5 class='show-car-list'>Color:   ${wantedCar.color}</h5>
         <h5 class='show-car-list'>Year:   ${wantedCar.year}</h5>   
         <h5 class='show-car-list'>Price:  $${wantedCar.price}</h5>
         <h5 class='show-car-list'>Stock:  ${wantedCar.stock}</h5>
         <br>`
     }else{
        wrapperStyle.classList.add('redBg')
        freeSpace.innerHTML = `
        <h5 class='show-car-list'>Sorry, We haven't got a car with this name... <br> But we have other options, if you like..</h5> <br>`
        All_CARS.forEach(car => {
            freeSpace.innerHTML += `
            <h5 class='show-car-list'>ID:      ${car.id}</h5>
            <h5 class='show-car-list'>Name:   ${car.name}</h5>   
            <h5 class='show-car-list'>Model:  ${car.model}</h5>
            <h5 class='show-car-list'>Color:   ${car.color}</h5>
            <h5 class='show-car-list'>Year:   ${car.year}</h5>   
            <h5 class='show-car-list'>Price:  $${car.price}</h5>
            <h5 class='show-car-list'>Stock:  ${car.stock}</h5>
            <br>
            `
        })  
        
     }

}
// Exit from form function 
const exitFromForm = () => {
    showBtns.classList.add('hide')
    loginForm.classList.remove('hide')
    freeSpace.innerHTML = ''
    addForm.innerHTML = ''
}
// Sort cars
const sortCars = (e) => {
    e.preventDefault()
    if(sortBy.value === 'stock'){
        All_CARS.sort((a, b) => b.stock - a.stock) 
        showCarList()
    } else if(sortBy.value === 'price') {
        All_CARS.sort((a, b) => b.stock - a.stock) 
        showCarList()
    } else if (sortBy.value === 'year') {
        All_CARS.sort((a, b) => b.stock - a.stock) 
        showCarList()
    } else if (sortBy.value === 'model') {
        All_CARS.sort((a, b) => b.stock - a.stock) 
        showCarList()
    }else {
        All_CARS.sort((a, b) => a.name.localeCompare(b.name))
        showCarList();
    }
}

const toggleSelect = () => {
    sortBy.classList.toggle('show')
    sortBtnIcon.classList.toggle('show')
}
// const 
// EVENTS
loginForm.addEventListener("submit", showButtons);
addForm.addEventListener('submit', submitAddForm)
addBtn.addEventListener('click', showFormFunc)
showBtn.addEventListener('click', showCarList)
deleteCrossBtn.addEventListener('click', deleteCar)
deleteBtn.addEventListener('click', toggleDeleteForm)
searchBtn.addEventListener('click', toggleSearchForm)
searchIcon.addEventListener('click', searchCar)
exitBtn.addEventListener('click', exitFromForm)
sortBtn.addEventListener('click', toggleSelect)
sortBtnIcon.addEventListener('click', sortCars)