// Write your solution in this file!
const employee = {
    name: "Sam", 
    streetAddress: "11 Broadway" 
} 

const employee1 = {...employee}


function updateEmployeeWithKeyAndValue(employee, key, value) { 
   return {
       ...employee,
       [key]: value,
   } 
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 

    return employee;
} 

function deleteFromEmployeeByKey(employee, key, value) {
    const employee1 = {...employee} 
    delete employee1[key]
    return employee1 
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key] 
    return employee 
}
