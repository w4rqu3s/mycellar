import NavigationBar from '../../components/navigationbar';
import WannaBuyList from '../../components/wannabuylist';

import { list } from '../../utils/data';


export default function WannaBuy() {

    return (
        <>
          <NavigationBar />
          <WannaBuyList drinks={list} />
        </>
    )

}