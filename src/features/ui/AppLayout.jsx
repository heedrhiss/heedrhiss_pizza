import { Outlet } from 'react-router-dom';
import {useNavigation} from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';
import CartOverview from '../cart/CartOverview';

function AppLayout() {
    
const navigation = useNavigation()
const isLoading = navigation.state === 'loading';

    return (
        <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
            <Header/>
            {isLoading && <Loader/>}
            <div className="overflow-scroll">
            <main className='max-w-3xl mx-auto p-3'>
                <Outlet/>
            </main>
            </div>
            <CartOverview/>
        </div>
    )
}

export default AppLayout
