import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import api from '../../services/api';

import { PostCardS as Card } from './postCard';

import heart from '../../assets/heart.svg'

function PostCard(props) {

    const post = props.post;
    const theme = props.theme;
    const { user } = useContext(UserContext);

    const [like, setLike] = useState(post.likes.includes(user.userName));


    async function likeHandler() {
        try {
            if (!like) {

                await api.put("/post/like", {
                    id: post._id,
                    userName: user.userName
                });
                setLike(true);
            }

        } catch (error) {
            console.log({ error: error.response.data });
        }
    }


    async function dislikeHandler() {
        try {
            if (like) {

                await api.patch("/post/dislike", {
                    id: post._id,
                    userName: user.userName
                });
                setLike(false);

            }

        } catch (error) {
            console.log({ error: error });

        }
    }

    return (
        <Card>

            <h3 className="userName"> {post.userName} </h3>

            <h4 className="content"> {post.content} </h4>

            {like ? <img src={theme.heartLike} alt="likeIcon" onClick={dislikeHandler} /> : <img src={heart} alt="likeIcon" onClick={likeHandler} />}

        </Card>
    )
}

export default PostCard;
