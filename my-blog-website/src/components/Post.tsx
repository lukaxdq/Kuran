import React from 'react';

interface PostProps {
    title: string;
    content: string;
    author: string;
    date: string;
}

const Post: React.FC<PostProps> = ({ title, content, author, date }) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <div className="post-meta">
                <span>By {author}</span>
                <span> on {date}</span>
            </div>
        </div>
    );
};

export default Post;