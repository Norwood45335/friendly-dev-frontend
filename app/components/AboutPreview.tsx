import { Link } from "react-router";

const AboutPreview = () => {
    return ( <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
        <img src="/images/profile.jpg" alt="profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md" />
        <div>
            <h2 className="text-2xl font-bold text-white mb-2">
                👋 About Me
            </h2>
            <p className="text-gray-200 mb-4 max-w 4xl">
                Welcome to my digital space! I'm a passionate web developer who loves creating beautiful, functional, and user-friendly applications that make a difference. I specialize in modern web technologies and enjoy helping businesses bring their ideas to life.
            </p>
            <Link to='/about' className='inline-block text-blue-400 hover:underline text-sm'>
                Learn More About Me
            </Link>
        </div>
    </section>

    );
}
 
export default AboutPreview;