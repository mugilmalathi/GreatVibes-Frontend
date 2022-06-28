import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        country:"",
        city:"",
        state:"",
        message:""
    });

    const [errorMessage, seterrorMessage] = useState('')

  
    const handleSubmitter = (e)=>{

      if(formData.name == ""){
        return seterrorMessage("Please Enter the Name")
      }
      if(formData.email == ""){
        return seterrorMessage("Please Enter the Email")
      }
      if(formData.mobile == ""){
        return seterrorMessage("Please Enter the Mobile")
      }
      if(formData.country == ""){
        return seterrorMessage("Please Enter the Country")
      }
      if(formData.state == ""){
        return seterrorMessage("Please Enter the State")
      }
      if(formData.city == ""){
        return seterrorMessage("Please Enter the City")
      }
      if(formData.message == ""){
        return seterrorMessage("Please Enter the Message")
      }
      alert(`Hello ${formData.name}, you have registred successfully..!`)
    
        axios.post("http://localhost:8080/users", formData)
        .then(()=>{
            setFormData({
                name:"",
                email:"",
                mobile:"",
                country:"",
                city:"",
                state:"",
                message:""
            })
        })
    }

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })
    }

  return (
    <div id='register'>
        <div id='top_div'>
            <h1>Registration Form</h1>
            {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
            <input 
              id='name' 
              type="text" 
              placeholder='Enter Name' 
              onChange={handleChange}
              value={formData.name}
            />
            <br />
            <input 
              id='email' 
              type="text" 
              placeholder='Enter Email' 
              onChange={handleChange}
              value={formData.email}
            />
            <br />
            <input 
              id='mobile' 
              type="number" 
              placeholder='Enter Mobile Number' 
              onChange={handleChange}
              value={formData.mobile}
            />
            <br />
            <select 
                id="country" 
                onChange={handleChange}
                value={formData.country}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="US">United States</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="UK">United Kingdom</option>
              <option value="Srilanka">Srilanka</option>
            </select>
            <br />
            <select 
                id="state" 
                onChange={handleChange}
                value={formData.state}
            >
              <option value="">Select State</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Andhra">Andhra Pradesh</option>
              <option value="Kerala">Kerala</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Rajastan">Rajastan</option>
            </select>
            <br />
            <select 
                id="city" 
                onChange={handleChange}
                value={formData.city}
            >
              <option value="">Select City</option>
              <option value="Tamilnadu">Chennai</option>
              <option value="Andhra">Salem</option>
              <option value="Kerala">Erode</option>
              <option value="Delhi">Dharmapuri</option>
              <option value="Karnataka">Coimbatore</option>
              <option value="Mumbai">Kanyakumari</option>
              <option value="Rajastan">Trichi</option>
            </select>
            <br />
            <textarea 
              id="message"
              placeholder='Enter Message Here'
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <br />
            <button 
              id='submit'
              onClick={handleSubmitter}
            >REGISTER</button>
        </div>
        <div id='bottom_div'></div> 
    </div>
  )
}

export default Registration