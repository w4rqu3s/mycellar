import { useNavigate } from 'react-router';

import NavigationBar from '../../components/navigationbar';

export default function DrinkList() {

    const navigate = useNavigate();

    return (
        <>
          <NavigationBar  user='teste' />
          <h1>LISTA DE BEBIDAS</h1>
        </>
    )

}