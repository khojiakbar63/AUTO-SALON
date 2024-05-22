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