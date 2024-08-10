import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                    <h2 className='text-2xl font-semibold text-[#3D52A0] mb-2'>{title}</h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
