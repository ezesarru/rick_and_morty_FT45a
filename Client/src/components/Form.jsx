//? Hooks
import { useState } from "react"

//? Imports
import { validation } from '../utilities/validation'

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: 'Debe ingresar un email',
        password: 'Debe ingresar una password'
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                
                <label>Email: </label>
                <input 
                    type="text"
                    name="email" 
                    value={userData.email} 
                    onChange={handleChange}
                />
                {errors && <p>{errors.email}</p>}

                <label>Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange} 
                />
                {errors && <p>{errors.password}</p>}
                
                <button
                    type="submit"
                    disabled={ errors.email || errors.password }
                    >Submit
                </button>

            </form>
        </div>
    )
}

export default Form