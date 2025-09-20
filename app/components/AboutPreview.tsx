import { Link } from "react-router";

const AboutPreview = () => {
    return ( <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white border-4 border-blue-500 shadow-md">
            AJ
        </div>
        <div>
            <h2 className="text-2xl font-bold text-white mb-2">
                👋 About Me
            </h2>
            <p className="text-gray-200 mb-4 max-w 4xl">
                Recent Computer Science graduate with a passion for full-stack development. I enjoy solving complex problems through code and am always eager to learn new technologies and best practices in software engineering.
            </p>
            <Link to='/about' className='inline-block text-blue-400 hover:underline text-sm'>
                Learn More About Me
            </Link>
        </div>
    </section>

    );
}
 
export default AboutPreview;