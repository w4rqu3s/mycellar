import { useNavigate } from 'react-router';

import SignupForm from '../../components/signupform';

export default function SignUp() {

    const navigate = useNavigate();

    return (
        <SignupForm />
    )

}