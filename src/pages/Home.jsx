import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container } from '../components';
import PostCard from '../components/PostCard';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-gray-100">
                <Container>
                    <div className="text-center">
                        <h1 className="font-raleway text-7xl font-extrabold mb-6 text-gray-800">
                            Login to read posts
                        </h1>
                        <p className="font-raleway text-3xl text-gray-600">
                            Please log in to access the content.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
