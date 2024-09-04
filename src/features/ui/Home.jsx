import CreateUser from '../user/CreateUser';

function Home() {
  return (
    <div className='mb-4 px-4 sm:mx-auto'>
      <h1 className="text-4xl text-black p-5 my-10 text-center font-semibold">
        The best pizza.
        <br />
        <span className='text-yellow-500'>Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
