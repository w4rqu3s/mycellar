import { useNavigate } from 'react-router';

import LoginForm from '../../components/loginform';

export default function Login() {

    const navigate = useNavigate();

    return (
        <LoginForm />
    )

}