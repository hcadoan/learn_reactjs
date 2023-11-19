/** Two-way binding **/
import { useState } from "react";

const courses = [
  {
    id: 0,
    name: 'java'
  },
  {
    id: 1,
    name: 'javaScript'
  },
  {
    id: 3,
    name: 'PHP'
  },
]

// vd1 radio box

function RadioBoxUsestate() {

  const [checked, setChecked] = useState(0)

  const handleSubmit = () => {
    console.log({id: checked})
  }

  return (
    <div className="App">
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="radio"
              checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}


// vd2 check box

function CheckBoxUsestate() {

  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        //uncheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    console.log({id: checked})
  }

  return (
    <div className="App">
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}


export default CheckBoxUsestate;