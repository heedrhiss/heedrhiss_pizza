import { useSelector } from 'react-redux';
import CreateUser from '../user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector(state=> state.user.username)

  return (
    <div className='mb-4 px-4 sm:mx-auto flex flex-col items-center justify-center'>
      <h1 className="text-4xl text-black p-5 my-10 text-center font-semibold">
        The best pizza.
        <br />
        <span className='text-yellow-500'>Straight out of the oven, straight to you.</span>
      </h1>
      {username ? <Button to="/menu" type="primary">Continue to Menu</Button> : <CreateUser/>}
    </div>
  );
}

export default Home;
