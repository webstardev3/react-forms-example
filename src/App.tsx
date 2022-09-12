import React from 'react'
import './App.css'

function App() {

  const validateEmail = (email: string) => {

  }

  const submitForm = (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const inputObject = Object.fromEntries(formData)
    try {
      const emailString = inputObject.email.toString()
      validateEmail(emailString)
    } catch (e) {
      console.error(e)
    }
    console.log(inputObject)
  }

  return (
    <div className="App">
      <form onSubmit={(event) => submitForm(event)}>
        <div>
          <input
            type="text"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            minLength={3}
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
            minLength={8}
            placeholder="password"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{9-14}"
            placeholder="phone"
            minLength={9}
            maxLength={15}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
