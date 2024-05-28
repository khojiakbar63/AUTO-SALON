### AUTO SALON
#### HTML
1. Design the page

#### JAVASCRIPT
1. ADD FUNCTION()
    EX: { model: ----, name: ----, year: ----, color: ---, id: -----, stock----, price: ---- } 
    shunday object LS ga arrayni ichiga qo'shilsin
2. SHOW FUNCTION()
    EX: Barcha mashinalarni ko'rsatishi lozim html da
3. DELETE FUNCTION()
    EX: Mashinani o'chirish yani id si orqali
4. SEARCH FUNCTION()
    EX: Mashinani nomi orqali qdirish, Mavjud bo'lmasa tasodifiy mashina tavsiya qilsin
5. SORT FUNCTION() 
    EX: Qaysi mashina stockda eng ko'p bo'lsa shuni mavjudlarini ko'rsatishda yuqorida chiqishi kerak, ismi bilan tartiblash



<!--  -->

let carNameInput = document.querySelector('#car-name');
let carModelInput = document.querySelector('#model');
let carColorInput = document.querySelector('#color');
let carYearInput = document.querySelector('#year');
let carPriceInput = document.querySelector('#price');
let carStockInput = document.querySelector('#stock');

let deleteInput = document.querySelector('#delete-input');
let deleteForm = document.querySelector('#delete-form');

let exitBtn = document.querySelector('#exit-btn');
let wrapperStyle = document.querySelector('.wrapper')
// LOCAL STORAGE:
let All_CARS = JSON.parse(localStorage.getItem("Cars")) || [];
<!--  -->

<!--  -->
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
<!--  -->