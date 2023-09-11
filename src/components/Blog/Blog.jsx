import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the Title ${title}`} />
            <div className='flex justify-between gap-4'>
                {/* author name picture */}
                <div className='flex gap-3 mb-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* reading Time */}
                <div className='text-center'>
                    <span className='mr-2'>{reading_time} min read</span>
                    <button className='ml-2 text-2xl text-red-400'><FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <h1 className='text-4xl mb-4'>{title} </h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;