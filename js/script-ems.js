// CREATE AN ARRAY OF EMPLOYEES
let employeeArray = [
    [23845674,
     'Adam Smith',
     2384,
     'asmith@economist.com',
     'Executive'], 

    [12869832,
     'John Keynes',
      1286,
      'jkeynes@economist.com',
      'Marketing'],

    [57843902,
     'Milton Friedman',
     5784,
     'mfriedman@economist.com',
     'Sales'],

    [39024584,
     'David Ricardo',
      3902,
      'dricardo@economist.com',
      'Quality Assurance'],

    [89784932,
    'Esther Duflo',
     8978,
    'eduflo@economist.com',
    'Engineering']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.employeeArray) {
    const json = localStorage.employeeArray
    employeeArray = JSON.parse(json)
} 

// let storage = localStorage.getItem('employeeArray') || ''
// if (storage.length > 0) {
//     const json = storage
//     employeeArray = JSON.parse(json)
// }

// GET DOM ELEMENTS
const $ = selector => document.querySelector(selector)
const form = $('#addForm')
const empTable = $('#empTable')
let tbody = $('tbody')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employeeArray)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = $('#id').value
    const empName = $('#name').value
    const empExt = $('#extension').value
    const empEmail = $('#email').value
    const empDepartment = $('#department').value    
    
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmp = [Number(empID), empName, Number(empExt), empEmail, empDepartment]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employeeArray.push(newEmp)

    // BUILD THE GRID
    buildGrid(employeeArray)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    empID = $('#id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    
    // CONFIRM THE DELETE
    if (confirm(`Whould you like to delete employee ${e.target.parentElement.parentElement.children[1].innerText}?`)) {
        
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const rwIndex = e.target.parentElement.parentElement.rowIndex 

        // REMOVE EMPLOYEE FROM ARRAY
        employeeArray.splice(rwIndex-1,1)

        // BUILD THE GRID
        buildGrid(employeeArray)

    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(paramArray) {

    let empCount = 0

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.remove()
    
    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

//    empArr.forEach(employee => {
//     tbody.innerHTML += `<tr>
//                             <td>${employee[0]}</td>
//                             <td>${employee[1]}</td>
//                             <td>${employee[2]}<td>
//                             <td>${employee[3]}</td>
//                             <td>${employee[4]}<td>
//                         </tr>`
//    })

    for (let employee of paramArray) {
        tbody.innerHTML += `<tr>
                             <td>${employee[0]}</td>
                             <td>${employee[1]}</td>
                             <td>${employee[2]}</td>
                             <td>${employee[3]}</td>
                             <td>${employee[4]}<td>
                             <td><button class="btn btn-danger btn-sm">X</button></td>
                        </tr>`
        empCount++
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
   empTable.appendChild(tbody)

    // UPDATE EMPLOYEE COUNT
   let output = $('#empCount')
   output.textContent = `(${empCount})`
    
   // STORE THE ARRAY IN STORAGE
    localStorage.employeeArray = JSON.stringify(paramArray)
};