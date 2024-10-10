import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
const Todolist = () => {
  const[todo,setTodo]=useState('');
  const[db,setDb]=useState([]);
  function dataPost()
  {
    axios.post("http://localhost:3000/posts",{todo})
          .then(() => {
             alert("Data has been posted")
             setTodo('')
          })//callback function structure
          .catch(() => {
            alert("Data has not posted")
          })
  }
   function getData()
  {
    axios.get(" http://localhost:3000/posts")
    .then((response)=>{
      setDb(response.data)
      alert("Data has been received");
    })
    .catch(()=>{
      alert("Data has not received")
    })
  }
  function deleteData(id) {
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        alert("Data has been deleted");
        getData(); // Refresh the list after deleting
      })
      .catch(() => {
       alert("Data could not be deleted");
      });
  }
  console.log(db)
  return (
    <div>
      <p>
        {todo}
      </p>
         <TextField 
         id="outlined-basic"
         label="Todo" variant="outlined" 
         value={todo}
         onChange={(ref)=>setTodo(ref.target.value)}
         />
         <br />
         <Button variant='contained' onClick={dataPost}>Post</Button>
         <Button variant='contained' onClick={getData}>Get</Button>
         <div>
          <ul>
            {
              db.map((item)=> (
                <li key={item.id}>{item.todo}<Button 
                onClick ={() => deleteData(item.id)}>DELETE</Button></li>
              ))
            }
          </ul>
         </div>
    </div>
  )
}
export default Todolist