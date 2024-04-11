import React, {useState, useEffect} from 'react'
import EmployeeList from './EmployeeList'
import NewEmployeeForm from './NewEmployeeForm'
import SearchEmployee from './SearchEmployee'
//import EmployeeEdit from './EmployeeEdit'

const EmployeePage = () => {
    const [employees, setEmployees] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
     useEffect(() => {
        fetch("/employees")
        .then(r => r.json())
        .then(setEmployees) 
          },[])

          function handleAddEmployee (newEmployee) {
            setEmployees([...employees, newEmployee])
            }  

            function handleUpdatedEmployee(updatedEmployee){
              const updatedEmployees = employees.map((employee) => {
                if (employee.id === updatedEmployee.id) {
                  return updatedEmployee
                 } else {
                  return employee
                 }
              })
              setEmployees(updatedEmployees)
              }

              function handleDeleteEmployee(id) {
  const filteredEmployees = employees.filter(employee => employee.id !== id)
                setEmployees(filteredEmployees)
              }

  const filteredEmployees = employees.filter(employee => {
    return ((employee.name).toLowerCase()).includes(searchTerm.toLowerCase())})          
 
  return (
    <main>
      <div id='employeeForm'>
      <SearchEmployee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div>
        <EmployeeList 
        employees={filteredEmployees} 
       // filteredEmployees= {employees}
        onUpdateEmployee={handleUpdatedEmployee}
        onDeleteEmployee={handleDeleteEmployee}
        />
        </div>
        <div id="employeeForm">
       <NewEmployeeForm onAddEmployee={handleAddEmployee}/>
       </div>
       
        
        </main>
  )
}

export default EmployeePage