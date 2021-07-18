import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import api from './api'

function Validate() {

    const history = useHistory();
    const { userName, token } = useParams();


    useEffect(() => {

        if (!userName || !token) {
            history.push('/login')
            window.alert("Link invalido");
        }
        else
            send();

    }, [])

    async function send() {
        try {
            await api.put('/user/validate', {
                userName,
                token
            })
            history.push('/login');
            window.alert("Conta validada");
        } catch (error) {
            console.log(error);
            history.push('/login');
            window.alert("Link invalido");

        }
    }


    return (<></>)

}

export default Validate
