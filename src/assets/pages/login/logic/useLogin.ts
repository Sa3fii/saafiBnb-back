import axios, { AxiosError } from 'axios';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppAuthContext } from '../../../core/contexts/AppAuthProvider';
// import { KeyLike, decodeJwt, jwtVerify } from 'jose';


const useLogin = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const { setUserToken, setUserData } = useContext(AppAuthContext);

    const navigate = useNavigate();

    const handleValidation = () => {
        let formIsValid = true;

        if (!email.match(/^[a-zA-Z_]{3,20}$/)) {
            formIsValid = false;
            setemailError("Username Not Valid");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z1-9]{2,22}$/)) {
            formIsValid = false;
            setpasswordError(
                " length must best min 2 Characters "
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const valid = handleValidation();
            if (valid) {
                const result = await axios.post('http://localhost:5005/user/signin', { user: email, password })
                if (result.data.statusCode == 7000) {
                    setUserToken(result.data.data)
                    // const decoded = jwtVerify(result.data.data, 'barabaw');
                    // setUserData({id : decoded.id , name : decoded.user});
                    setUserData({ id: '1', name: 'dad', email: '' });
                    navigate('/')
                };
                if (result.data.statusCode === 7001) {
                    setemailError('User not Found')
                }
                if (result.data.statusCode === 7003) {
                    setpasswordError('Invalid Password')
                }
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error)
                if (error.response?.data.statusCode === 7001) {
                    setemailError('User not Found')
                }
                if (error.response?.data.statusCode === 7003) {
                    setpasswordError('Invalid Password')
                }
            }
        }

    };

    return {
        loginSubmit,
        setEmail,
        emailError,
        setPassword,
        passwordError
    }
}
export default useLogin