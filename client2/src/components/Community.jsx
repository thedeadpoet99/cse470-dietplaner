import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    }, [username]); // Run only once on mount

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-pink-200 to-purple-200">
    <div className="max-w-2xl mx-auto flex-grow mt-20 ml-20">
        <ul className="divide-y divide-gray-300">
            {posts.map((post) => (
                <li key={post._id} className="py-4 bg-purple-100 rounded-lg px-4 mb-4">
                    <div className="mb-2">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </div>
                    <p className="text-gray-700">{post.content}</p>
                    <p className="text-gray-500">-{post.name}</p>
                </li>
            ))}
        </ul>
    </div>
    <div className="fixed right-0 top-20 w-1/3 p-4">
        <div>
            <h1 className="text-2xl font-semibold mb-4">New Blog Post</h1>
            <input
                type="text"
                placeholder="Type your title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="w-full border rounded py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Type your content"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="w-full border rounded py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button onClick={sendPost} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
        </div>
    </div>
</div>
    )
}

export default Community;
