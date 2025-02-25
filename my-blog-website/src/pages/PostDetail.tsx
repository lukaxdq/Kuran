import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, addComment } from '../services/api';
import Post from '../components/Post';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const fetchedPost = await getPostById(id);
            setPost(fetchedPost);
            setComments(fetchedPost.comments);
        };
        fetchPost();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const addedComment = await addComment(id, newComment);
        setComments([...comments, addedComment]);
        setNewComment('');
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <Post title={post.title} content={post.content} />
            <h3>Comments</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Leave a comment"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostDetail;