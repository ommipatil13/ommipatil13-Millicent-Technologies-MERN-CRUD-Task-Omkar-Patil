import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const res = useParams();
    // console.log(res.id)
    // console.log(res)

    const navigate = useNavigate()

    const [user, setUser] = useState({
        title: '',
        author: '',
        published: '',
    });


    const fetchData = async () => {
        const res = await axios.get(`http://localhost:8080/book/${id}`);
        setUser(res.data);
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handelChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(user);
    };

    //update 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, author, published } = user;
        if (!title || !author || !published) {
            alert('please enter all details')
            return
        }

        try {
            const updateUser = await axios.put(`http://localhost:8080/book/${id}`, user)

            alert('updated')
            console.log('update data', updateUser.data)
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>

            <form
                className=" w-2/6 mx-auto mt-20  shadow-lg shadow-black rounded-2xl grid py-6 px-10  "
                onSubmit={handleSubmit}
            >
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={user.title}
                    placeholder="Title"
                    onChange={handelChange}
                    className="px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border"
                />

                <label htmlFor="author" className=" mt-2">
                    Author:
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={user.author}
                    placeholder="Author"
                    onChange={handelChange}
                    className="px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border"
                />

                <label htmlFor="published" className=" mt-2">
                    Published Year:
                </label>
                <input
                    type="text"
                    id="published"
                    name="published"
                    value={user.published}
                    placeholder="Published Year"
                    onChange={handelChange}
                    className="px-2 py-2 rounded-xl outline-none bg-zinc-200 focus:bg-white focus:border"
                />


                <button
                    type="submit"
                    className="text-lg bg-green-600 rounded-full py-2 mt-8 text-white hover:bg-green-700 hover:scale-105 transition-all"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;
