import React, { useState } from 'react'

const GithubSearch = () => {
    const [username,setUsername] = useState('');
    const [data,setData] = useState([]);

    const githubSearch = () =>{
        try {
            if(username===""){
                alert('please enter a value')
            }else{
                const url = `https://api.github.com/users/${username}`
                fetch(url)
                .then((res)=>res.json())
                .then((response)=>{
                    setData(response)
                    console.log(response);
                    
                })
                setUsername('')
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(data);
    
    const handleForm = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
      <div className='flex justify-center mt-5 p-3 shadow bg-white'>
        <form action="" onSubmit={handleForm} className='flex gap-2'>
        <input className='border rounded p-2 w-100 cursor-pointer' value={username} onChange={(e)=>setUsername(e.target.value)} type="search" name="search" id="101" placeholder='Enter a Github Username'/>
        <button type='submit' onClick={githubSearch} className=' cursor-pointer rounded p-2 border ps-3 pe-3 bg-blue-400 text-white font-semibold'>Search</button>
        </form>
      </div>
      <div className='flex justify-center mt-5'>
        
          {data.length!==0?<div className='p-3 font-semibold text-lg  rounded shadow-2xl'>
                <img className='h-50 w-50 rounded-full' src={data.avatar_url} alt="" />
                <p className='mt-2'>Name : {data.name}</p>
                <p>Bio : {data.bio}</p>
                <p>Id : {data.id}</p>
                <p>Location : {data.location}</p>
                <p>Following : {data.following}</p>
                <p>Followers : {data.followers}</p>
                <p>Company : {data.company}</p>
                <p>Url : {data.html_url}</p>
            </div>:""}
           
    
      </div>
    </div>
  )
}

export default GithubSearch
