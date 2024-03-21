import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
66
const Community = () => {
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch user profile data
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('User not authenticated');
                    return;
                }

                setUsername(JSON.parse(atob(token.split('.')[1])).username)
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
            }
        };

        fetchUserProfile();
    }, []);

    

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/post', {});
            const data = await response.json();
            console.log(data);
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const sendPost = async () => {
        try {
            console.log(postTitle, postContent);
            await fetch('http://localhost:3001/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postTitle, postContent, username }),
            });

            // Clear the message input after sending
            setPostTitle('');
            setPostContent('');
            // Fetch posts to update the list
            fetchPosts();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        // Fetch posts on component mount
        if (username) {
            console.log(username)
            fetchPosts();
            return;
        }
    }, [username]); 

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
            <div className="max-w-2xl mx-auto flex-grow mt-20 ml-20">
                <ul className="divide-y divide-gray-300">
                    {posts.map((post) => (
                        <li key={post._id} className="py-4 bg-purple-100 rounded-lg px-4 mb-4">
                            <div className="mb-2">
                                <Link to={`Details/${post._id}`}>
                                    <h2 className="text-xl font-semibold">{post.title}</h2>
                                </Link>
                            </div>
                            <div className="text-gray-700 overflow-hidden line-clamp-3">{post.content}</div>
                            <Link to={`Details/${post._id}`} className="text-blue-500">Read More</Link>
                            <p className="text-gray-500">-{post.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-2xl mx-auto flex-grow mt-20 ml-20">
                <div className='fixed py-4 bg-purple-100 rounded-lg px-4 mb-4 mt-20'>
                    <h1 className="text-2xl font-semibold mb-4">New Blog Post</h1>
                    <input
                        type="text"
                        placeholder="Type your title"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        className="w-full border rounded py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        placeholder="Type your content"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className="w-full border rounded py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button onClick={sendPost} className="text-lg bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">Post</button>
                </div>
            </div>
        </div>
    );
}

export default Community;
