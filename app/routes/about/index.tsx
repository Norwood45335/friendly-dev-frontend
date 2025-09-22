const AboutPage = () => {
    return ( 
        <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
            {/* intro */}
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src="/images/profile.jpg" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md" />
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Hey, I'm a Friendly Dev 👋
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Welcome to my digital space! I'm a passionate web developer who loves creating beautiful, functional, and user-friendly applications that make a difference.
                    </p>
                </div>
            </div>
            {/* Bio section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    My mission is to help businesses and individuals bring their ideas to life through clean, efficient, and scalable web solutions. I believe in writing code that not only works today but stands the test of time, and I'm committed to staying current with the latest technologies and best practices.
                </p>
            </div>
            {/* Tech stack */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                🚀 Tech I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {/* listing technologies as array of strings */}
                {[
                    'React',
                    'Next.js',
                    'Vue',
                    'Tailwind CSS',
                    'Node.js',
                    'Laravel',
                    'Prisma',
                    'MongoDB',
                    'PostgreSQL',
                    'Appwrite',
                    'Docker',
                ].map((tech) => (
                    <li key={tech} className='bg-gray-700 px-3 py-1 rounded-md'>
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default AboutPage;