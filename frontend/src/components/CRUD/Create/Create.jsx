import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {

    const navigate = useNavigate()

    // useState 
    const [user, setUser] = useState({
        title: '',
        author: '',
        published: '',
    })

    const handelChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    // api 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, author, published } = user;
        if (!title || !author || !published) {
            alert('please enter all details')
            return
        }

        try {
            const res = await axios.post('http://localhost:8080/book', user)
            alert('Created')
            console.log(res.data)
            navigate('/')
        }

        catch (error) {
            console.log('error', error)
        }

    }

    return (
        <div>

            <form onSubmit={handleSubmit} className=' w-2/6 mx-auto mt-20  shadow-lg shadow-black rounded-2xl grid py-6 px-10 '  >

                <label htmlFor="title">Title: </label>
                <input name='title' value={user.title} onChange={handelChange} type="text" id='title' placeholder='Title' className='px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border' />

                <label htmlFor="author" className=' mt-2'>Author: </label>
                <input name='author' value={user.author} onChange={handelChange} type="text" id='author' placeholder='Author' className='px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border' />

                <label htmlFor="py" className=' mt-2'>Published Year: </label>
                <input name='published' value={user.published} onChange={handelChange} type="text" id='py' placeholder='Published Year' className='px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border' />

                <button title='create' type='submit' className='text-lg bg-blue-600 rounded-full py-2 mt-8 text-white hover:bg-blue-700 hover:scale-105 transition-all'>Create</button>

            </form>

        </div>

    )
}

export default Create 