import React, { useState } from 'react'

function EmployeeCard ({employee, onUpdateEmployee, onDeleteEmployee}) {
    const {
    id,    
    name,
    image,
    password,
    position,
    schedule,
    workTime,
    payPerHour,
    timeInEvents,
    timeOutEvents,
    payForThisWeek} = employee

    const [updatedWorkTime, setUpdatedWorkTime] = useState(0)
    
    function handleWorkTimeChange(e){
        const amount = e.target.value
        if (amount === "" || amount === null) {
          setUpdatedWorkTime()
         } else {
          setUpdatedWorkTime(parseFloat(e.target.value))
        }
      }
      function handleSubmit(e) {
        e.preventDefault()
    
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({workTime: updatedWorkTime})
        }
        fetch(`/employees/${id}`, configObj)
        .then(r => r.json())
        .then(updatedEmployee => onUpdateEmployee(updatedEmployee))
    
        setUpdatedWorkTime(0)
      }
      function handleDelete(params) {
        fetch(`/employees/${id}`, {
          method: "DELETE"
        })
        .then(onDeleteEmployee(id))
       }

    return (
        <div className="card">
           <ul>
           <li>{name}</li>
           <img src={image} alt={name} />
           <li>{password}</li>
           <li>position:{position}</li>
           <li>schedule:{schedule}</li>
           <li>WorkTime:{workTime}</li>
           <li>Pay per hour:${payPerHour}</li>
           <li>Time In:{timeInEvents}</li>
           <li>Time Out:{timeOutEvents}</li>
           <li>Pay for this week: ${payForThisWeek}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
           <form onSubmit={handleSubmit}>
        <input 
        type="number" 
        step ="0.01"
        placeholder="New WorkTime..."
        value={updatedWorkTime}
        onChange={handleWorkTimeChange}
        />
        <button type="submit">UpdateWorkTime</button>
      </form>
        </div>   
       )
}

export default EmployeeCard