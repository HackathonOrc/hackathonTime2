import React, { createContext, useState } from 'react';
import api from "../services/api";


export const UserContext = createContext({});

export function UserProvider({ children }) {

    const [user, setUser] = useState();

    async function fowardpage() {
        console.log({ message: "enviado para a proxima pagina" });
    }
    async function saveUser(userData, tempToken) {

        setUser({
            id: userData._id,
            userName: userData.userName,
            name: userData.name,
            email: userData.email,
            token: tempToken
        })

        localStorage.setItem("user", JSON.stringify(
            {
                id: userData._id,
                userName: userData.userName,
                name: userData.name,
                email: userData.email,
                token: tempToken
            }
        ));
    }


    async function login(password, email) {
        try {
            const res = await api.post("/user/login", {
                email,
                password
            });

            if (res.data.user) {
                saveUser(res.data.user, res.data.token);
                fowardpage();
            }

        } catch (err) {
            console.error({ error: err.message })
        }
    }

    async function recoverUser() {
        try {

            if (!user) {
                const tempUser = localStorage.getItem("user");
                if (tempUser) {
                    setUser(JSON.parse(tempUser));
                    console.log({ recuperado: JSON.parse(tempUser) });
                    fowardpage();
                }
            }

        } catch (err) {
            console.error({ error: err.message })
        }
    }

    async function register(name, userName, email, password, confirmatePassword) {
        try {
            if (password === confirmatePassword) {
                const res = await api.post("/user/register", {
                    name,
                    userName,
                    email,
                    password
                });

                if (res.data.user) {
                    console.log({ message: "usuario criado" })
                    // login(res.data.user.password, res.data.user.email)
                    saveUser(res.data.user, res.data.token);
                }
            }
            else {
                console.log({ message: "Senhas diferentes" })
            }


        } catch (err) {
            console.error({ error: err.message })
        }
    }

    async function logout() {
        localStorage.removeItem("user");
        setUser(undefined);


    }

    return (
        <UserContext.Provider value={{
            user,
            login,
            recoverUser,
            register,
        }}>
            {children}
        </UserContext.Provider>
    )
}


{/*  */ }