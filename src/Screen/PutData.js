import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {Link} from "react-router-dom";
import axios from 'axios';
import React ,{useState} from 'react'

export default function Signup() {
    const [credentials,setcredentials]=useState({username:"",language:"",stdin:"",sourcecode:""})
    // const handleSubmit=async(e)=>{
    //     e.preventDefault();
    //     const response=await fetch("http://localhost:5001/api/putdata",{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'

    //         },
    //         body:JSON.stringify({username:credentials.username,language:credentials.language,stdin:credentials.stdin,sourcecode:credentials.sourcecode})
    //     })
    //     const js=await response.json();
    //     console.log(js)
    //     if(!js.success){
    //         alert("Enter Valid Credentials")
    //     }
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:5000/api/putdata",credentials);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         if (!data.success) {
    //             alert("Enter Valid Credentials");
    //         } else {
    //             alert("Data submitted successfully");
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert("Error submitting data");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/putdata", { // Assuming your server is running on port 5000
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            if (!data.success) {
                alert("Enter Valid Credentials");
            } else {
                alert("Data submitted successfully");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const onChange=(ev)=>{
        setcredentials({...credentials,[ev.target.name]:ev.target.value})
    }


    return (
        <div className='sindiv'>
        <Navbar/>
        <div className='container py-5 signform ' style={{width:'50%',marginTop:'3rem',marginBottom:'2.99996rem'}}>
            
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fs-3">Your User Name</label>
                        <input type="string" className="form-control" id="username" name='username'  onChange={onChange} value={credentials.username} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fs-3">Language</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='language'  onChange={onChange} value={credentials.language}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fs-3">STDIN</label>
                        <textarea rows="3" cols="20" type="text" className="form-control" id="exampleInputPassword1 "  name='stdin'  onChange={onChange} value={credentials.stdin} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label fs-3">Source Code</label>
                        <textarea rows="10" cols="20" type="string" className="form-control" id="location "  name='sourcecode'  onChange={onChange} value={credentials.sourcecode} />
                    </div>
                    
                    
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <Link to="/Home" style={{marginLeft:'10px'}} >Wanna See all Submissions</Link>
                </form>

            </div>
            <Footer/>
        </div>
    )
}
