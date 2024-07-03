import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading/Loading';

const Home = () => {

    const [user, setUser] = useState([]);
    const [loadMore, setLoadMore] = useState(4)
    const [loading, setLoading] = useState();

    // fetching all data 
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:8080/book`);
        console.log(res.data);
        setUser(res.data);
    }
    useEffect(() => {
        fetchData()
    }, [])

    // delete operation 
    const handleDelete = async (id) => {
        // console.log(id)
        // let answer = window.prompt('are you sure want to delete ?')
        // if (!answer) return
        await axios.delete(`http://localhost:8080/book/${id}`)
        fetchData()
        alert('Deleted')
    }

    const userSlice = user.slice(0, loadMore);

    //loading 
    const handleLoad = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLoadMore(loadMore + loadMore);
        }, 500);

    }

    return (
        <>
            {
                loading ? <Loading /> : <>
                    <div className=' bg-zinc-100 grid grid-cols-4 gap-12 py-14 px-16' >

                        {userSlice.map((item) => {
                            return (
                                <div key={item._id} className='px-6 py-5 shadow-lg shadow-black rounded-xl ' >
                                    {/* <h1>{item._id}</h1> */}
                                    <h1>Title: {item.title}</h1>
                                    <h1>Author: {item.author}</h1>
                                    <h1>Published Year: {item.published}</h1>

                                    <div className='flex justify-between mt-4'>
                                        <Link to={`/update/${item._id}`} className='text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full'>
                                            Update</Link>
                                        <button className='text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full'
                                            onClick={() => handleDelete(item._id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </>
            }

            <div className='  w-fit mx-auto'>
                <button className='px-4 py-2 rounded-3xl text-white bg-zinc-500 hover:bg-zinc-600 hover:scale-105 transition-all'
                    onClick={() => handleLoad()} >Load More</button>
            </div>
        </>
    )
}

export default Home