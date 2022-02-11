import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from "../features/auth/authSlice"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()


    if(password !== password2) {
      toast.error('passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit} >
          <div className="form-group">
            <input 
            type="text" className="form-control" 
            id="name" 
            placeholder="Enter your name" value={name} 
            name="name" 
            required
            onChange={onChange} />
          </div>

          <div className="form-group">
            <input 
            type="email" className="form-control" 
            id="email" 
            placeholder="Enter your email" value={email} 
            name="email" 
            required
            onChange={onChange} />
          </div>

          <div className="form-group">
            <input 
            type="password" className="form-control" 
            id="password" 
            placeholder="Enter your password" value={password} 
            name="password" 
            onChange={onChange} 
            required/>
            
          </div>

          <div className="form-group">
            <input 
            type="password" className="form-control" 
            id="password2" 
            placeholder="Repeat password" value={password2} 
            name="password2" 
            required
            onChange={onChange} />
          </div>

          <div className="form-group">
            <button className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register