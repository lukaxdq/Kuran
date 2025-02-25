import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Post';

const Home: React.FC = () => {
    const posts = [
        {
            id: 1,
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
            author: 'Author 1',
            date: '2023-10-01'
        },
        {
            id: 2,
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
            author: 'Author 2',
            date: '2023-10-02'
        }
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Blog</h1>
                <div>
                    {posts.map(post => (
                        <Post key={post.id} title={post.title} content={post.content} author={post.author} date={post.date} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;