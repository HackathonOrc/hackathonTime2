import React from 'react'
import { PostCardS as Card } from './postCard';

function PostCard(props) {

    const post = props.post;

    return (
        <Card>

            <h3 className="userName"> {post.userName} </h3>

            <h4 className="content"> {post.content} </h4>
        </Card>
    )
}

export default PostCard;
