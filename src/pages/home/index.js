import { useNavigate } from 'react-router';

import HomeGrid from '../../components/homegrid';

export default function Home() {

    const navigate = useNavigate();

    return (
        <HomeGrid />
    )

}