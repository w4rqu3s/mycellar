import { useNavigate } from 'react-router';

import NavigationBar from '../../components/navigationbar';

export default function WannaBuy() {

    const navigate = useNavigate();

    return (
        <>
          <NavigationBar  user='teste' />
          <h1>FUTURAS ADIÇÕES</h1>
        </>
    )

}