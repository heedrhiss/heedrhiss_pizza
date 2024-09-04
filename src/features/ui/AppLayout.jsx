import { Outlet } from 'react-router-dom';
import {useNavigation} from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';
import CartOverview from '../cart/CartOverview';

function AppLayout() {
    
const navigation = useNavigation()
const isLoading = navigation.state === 'loading';

    return (
        <div className='grid grid-row-[auto_1fr_auto] h-screen'>
            <Header/>
            {isLoading && <Loader/>}
            <main className='overflow-scroll'>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    )
}

export default AppLayout
