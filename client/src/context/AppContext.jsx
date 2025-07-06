import React, { createContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const AppContext = createContext();
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]); //all blogs
    const [input, setInput] = useState(""); //filter input
    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/all');
            data.success ? setBlogs(data.blogs) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        fetchBlogs();
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `${token}`;
        }
    }, []);

    const value = {
        token,
        setToken,
        blogs,
        setBlogs,
        input,
        setInput,
        navigate,
        axios,
        fetchBlogs
    };


    return (
        <AppContext.Provider value={value

        }>
        {children}
        </AppContext.Provider>
    );
}
export const useAppContext = () => {
    return useContext(AppContext);
}   