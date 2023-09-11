import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-5 mx-8 items-center border-b-2'>
            <h1 className='text-5xl'>React Knowledge Cafe </h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;