import React, { useState, useEffect } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function Home() { 
    const [notedata, setnotedata] = useState()
    const loadData = async () => {
        let dt = await fetch('http://localhost:5000/api/getdata');
        dt=await dt.json();
        setnotedata(dt);
        console.log(notedata)
       
    }
    useEffect(() => {
        loadData(); 
        // eslint-disable-next-line
    }, [])
    
    return (
        <div>
            <Navbar />

            <div className='d-flex m-1 p-3' style={{ flexDirection: 'column' }}>
                <h2 style={{ textAlign: 'center' }}>Add Your Note Here</h2>
            </div> 
            <div>
      
            {/* <ul>
                {notedata.map(note => (
                <li key={note._id}>
                    <p><strong>Username:</strong> {note.username}</p>
                    <p><strong>Language:</strong> {note.language}</p>
                    <p><strong>Stdin:</strong> {note.stdin}</p>
                    <p>
                    <strong>Sourcecode:</strong>{' '}
                    {note.sourcecode.length > 100
                        ? `${note.sourcecode.substring(0, 100)}...` // Display only first 100 characters
                        : note.sourcecode}
                    </p>
                    <p><strong>Date:</strong> {new Date(note.date).toLocaleString()}</p>
                </li>
                ))}
            </ul> */}
                <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Language</th>
          <th>Stdin</th>
          <th>Sourcecode</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {notedata.map((item, index) => (
          <tr key={index}>
            <td>{item.username}</td>
            <td>{item.language}</td>
            <td>{item.stdin}</td>
            <td>{item.sourcecode.slice(0, 100)}</td>
            <td>{new Date(item.date).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
            </div>   
           
            <Footer />
        </div>
    )
}
