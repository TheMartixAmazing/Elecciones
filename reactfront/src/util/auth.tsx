import axios from "axios";

const URI = "http://localhost:8000/users/";

interface UserToLogin {
    credential: string
    password: string
}

const checkEmail = (email: string) => {
    const reg = /\S+@\S+\.\S+/
    return reg.test(email)
}

const loginUser = async ({ credential, password }: UserToLogin) => {
    const userData = {
        userName: '',
        email: '',
        password: ''
    }

    userData.password = password

    if (checkEmail(credential)) {
        userData.email = credential
    } else {
        userData.userName = credential
    }

    const res = await axios.post(`${URI}login`, userData)
    
    return res.data.success
}

interface UserToRegister {
    nom_use: string,
    cor_use: string,
    pas_use: string,
}

const createNewUser = async ({ nom_use, cor_use, pas_use }: UserToRegister) => {
    const newUserData = {
        nom_use: nom_use,
        cor_use: cor_use,
        pas_use: pas_use,
    };

    const res = await axios.post(`${URI}`, newUserData)
    return res.data.success
}


export { loginUser , createNewUser }