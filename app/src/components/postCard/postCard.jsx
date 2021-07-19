import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import api from '../../services/api';

import { PostCardS as Card } from './postCard';

import heart from '../../assets/heart.svg'
import trash from '../../assets/trashIcon.svg'

function PostCard(props) {

    const post = props.post;
    const date = new Date(post.date);
    const theme = props.theme;

    const { user } = useContext(UserContext);

    const [like, setLike] = useState(false);

    useEffect(() => {
        if (user)
            setLike(post.likes.includes(user.userName));
        // eslint-disable-next-line
    }, [])

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
    async function deleteHandler() {
        try {
            await api.delete(`/post/delete/${post._id}/${user.userName}`

            )

        } catch (error) {
            console.error({ error: error.response.data.message })
        }
    }



    return (
        <Card>
            <div className="header">
                <h3 className="userName"> {post && post.userName} </h3>
                <span className="date">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>

                {
                    user && user.userName === post.userName ?
                        <button className="delete" onClick={deleteHandler}>
                            <img src={trash} alt="" className="trash" />
                        </button>
                        :
                        <></>
                }
            </div>
            <h4 className="content"> {post.content} </h4>

            {like ? <img className='heart' src={theme.heartLike} alt="likeIcon" onClick={dislikeHandler} /> : <img className='heart' src={heart} alt="likeIcon" onClick={likeHandler} />}

        </Card>
    )
}

export default PostCard;
