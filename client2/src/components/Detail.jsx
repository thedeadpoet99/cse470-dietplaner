import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Comments from './Comments';

const Details = () => {
    const [post, setPost] = useState({});
    const [username, setUsername] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/post/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setUsername(data.name)
                } else {
                    console.error('Error fetching post:', response.status);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="flex min-h-screen mt-20 bg-gradient-to-r from-pink-200 to-purple-200">

            <div className="max-w-2xl w-full p-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="titleandcommentlogo">
                        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                    </div>
                    <p className="text-lg text-gray-800">{post.content}</p>
                    <p className="text-sm text-gray-600">Author: {username}</p>
                </div>
            </div>

        </div>


    );
};

export default Details;