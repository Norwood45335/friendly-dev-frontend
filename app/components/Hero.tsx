import { Link } from "react-router";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Welcome to Friendly Dev
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    A modern developer portfolio showcasing projects, blog posts, and technical expertise.
                    Built with React Router, TypeScript, and Tailwind CSS.
                </p>
                <div className="space-x-4">
                    <Link 
                        to="/projects" 
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        View Projects
                    </Link>
                    <Link 
                        to="/blog" 
                        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                    >
                        Read Blog
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
