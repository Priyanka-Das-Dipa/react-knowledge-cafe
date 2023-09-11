import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-5 mx-8 items-center border-b-2'>
            <h1 className='text-5xl'>React Knowledge Cafe </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;