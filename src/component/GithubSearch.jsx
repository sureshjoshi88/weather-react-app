import React, { useState } from 'react'
import { memo } from 'react';

const GithubSearch = () => {
    const [username, setUsername] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    const githubSearch = async () => {
        if (username.trim() === '') {
            alert('Please enter a GitHub username');
            return;
        }

        try {
            const url = `https://api.github.com/users/${username}`;
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`User not found (Status: ${res.status})`);
            }

            const response = await res.json();
            setData(response);
            setError(null);
        } catch (err) {
            setError(err);
            setData(null);
        }

        setUsername('');
    };


    const handleForm = (e) => {
        e.preventDefault()
        githubSearch();
    }
    return (
        <div>
            <p className='text-center text-2xl font-medium  p-2 '>Github Search App</p>
            <div className='flex justify-center mt-5 p-3 shadow bg-white'>
                <form action="" onSubmit={handleForm} className='flex gap-2'>
                    <input className='border rounded p-2 w-100 cursor-pointer' value={username} onChange={(e) => setUsername(e.target.value)} type="search" name="search" id="101" placeholder='Enter a Github Username' />
                    <button type='submit' onClick={githubSearch} className=' cursor-pointer rounded p-2 border ps-3 pe-3 bg-blue-400 text-white font-semibold'>Search</button>
                </form>
            </div>
            <div className='flex justify-center mt-5'>
                {error && (
                    <div className="text-red-500">
                        <p>{error.message}</p>
                    </div>
                )}

                {data && (<div className='p-3 font-semibold text-lg  rounded shadow-2xl'>
                    <img className='h-50 w-50 rounded-full' src={data.avatar_url} alt="" />
                    <p className='mt-2'>Name : {data.name}</p>
                    <p>Bio : {data.bio}</p>
                    <p>Id : {data.id}</p>
                    <p>Location : {data.location}</p>
                    <p>Following : {data.following}</p>
                    <p>Followers : {data.followers}</p>
                    <p>Company : {data.company}</p>
                    <p>
                        URL :{' '}
                        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            Visit Profile
                        </a>
                    </p>            </div>)}


            </div>
        </div>
    )
}

export default memo(GithubSearch)
