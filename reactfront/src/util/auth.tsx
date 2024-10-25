import axios from "axios";

const URI = "http://localhost:8000/users/login";

interface User {
    credential: string
    password: string
}

const checkEmail = (email: string) => {
    const reg = /\S+@\S+\.\S+/
    return reg.test(email)
}

const loginUser = async ({ credential, password }: User) => {
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

    const res = await axios.post(URI, userData)

    return res.data.success
}


export { loginUser }