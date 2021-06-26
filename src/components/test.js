import React, {useState,useEffect} from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios'

function Example() {

const [students,setStudents] = useState({
    data: '',
    loading: true
})
const [name,setName] = useState('')
  
const handleClick = async() => {
    const data = await axios.get('http://localhost:3000/videoInfo?videoURL=https://m.youtube.com/watch?v=5vqAxqUoyWQ&feature=youtu.be')
    
    await setStudents({
        data: data,
        loading: false
    });
}

console.log(students)

return (
    <div className="container">
        <h2>Example component</h2>
        <button onClick = {handleClick}>Get students</button>
        
        <p>{students.loading? 'Loading': ''}</p>
        <div>
            {students.data.title}
        </div>
    </div>
);

 }

export default Example;