import { useNavigate } from 'react-router';

import NavigationBar from '../../components/navigationbar';
import DrinksList from '../../components/drinkslist';

import { drinks } from '../../utils/data'

export default function DrinkList() {

    const navigate = useNavigate();

    return (
        <>
          <NavigationBar  user='teste' />
          <DrinksList drinks={drinks}/>
        </>
    )

}