import React, { useState } from 'react'
import { BASE_URL } from '../utils/Config'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [formData, setFormData] = useState({
        name: undefined,
        email: undefined,
        password: undefined,
        phone: undefined
    })
    //used to navigate from one location to another location
    const navigate = useNavigate() 
    console.log(formData)
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                //for post request we need to send data client so pass this in RequestInit
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            const response = await res.json()
            useNavigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <form className="shadow p-5 rounded" onSubmit={handleSubmit}>
                        <h2 className='text-center'>Register</h2>
                        {/* <div class="mb-3 mt-3">
                                <button onclick="window.location.href='/api/auth/google'" class="btn border">Google</button>
                                <button onclick="window.location.href='/api/auth/github'" class="btn border">GitHub</button>
                            </div> */}
                        <div class="mb-3">
                            <label htmlFor="userName" class="form-label">User Name</label>
                            <input onChange={handleChange} type="name" placeholder="Enter your name" class="form-control" id="userName" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="name" class="form-label">Name</label>
                            <input onChange={handleChange} type="name" placeholder="Enter your name" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email address</label>
                            <input onChange={handleChange} type="email" class="form-control" id="email" placeholder="Enter your email" />
                            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" class="form-label">Password</label>
                            <input onChange={handleChange} type="password" placeholder="Enter your password" class="form-control" id="password" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="phone" class="form-label">Mobile Number</label>
                            <input onChange={handleChange} type="number" placeholder="Enter your mobile number" class="form-control" id="phone" />
                        </div>
                        {/* <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register