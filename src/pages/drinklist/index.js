import NavigationBar from '../../components/navigationbar';
import DrinksList from '../../components/drinkslist';

import { drinks } from '../../utils/data'

export default function DrinkList() {

    return (
        <>
          <NavigationBar />
          <DrinksList drinks={drinks}/>
        </>
    )

}