import { Outlet } from 'react-router-dom';
import {useNavigation} from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';
import CartOverview from '../cart/CartOverview';

function AppLayout() {
    
const navigation = useNavigation()
const isLoading = navigation.state === 'loading';

    return (
        <div className='layout'>
            <Header/>
            {isLoading && <Loader/>}
            <main>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    )
}

export default AppLayout
