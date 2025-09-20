const AboutPage = () => {
    return ( 
        <div className='max-w-5xl mx-auto px-6 py-16 bg-gray-900'>
            {/* intro */}
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white border-4 border-blue-500 shadow-md">
                    AJ
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Hey, I'm Alex Johnson 👋
                    </h1>
                    <p className="text-gray-300 text-lg">
                        A passionate Computer Science graduate with a focus on full-stack web development. I love building efficient, scalable applications and exploring new technologies to solve real-world problems.
                    </p>
                </div>
            </div>
            {/* Bio section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    My goal is to create impactful software solutions that make a difference in people's lives. I'm committed to writing clean, maintainable code and continuously improving my skills to stay current with industry best practices and emerging technologies.
                </p>
            </div>
            {/* Tech stack */}
            <h2 className="text-2xl font-semibold text-white mb-4">
                🚀 Tech I Use
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                {/* listing technologies as array of strings */}
                {[
                    'JavaScript',
                    'TypeScript',
                    'React',
                    'Next.js',
                    'Node.js',
                    'Express',
                    'Python',
                    'Java',
                    'PostgreSQL',
                    'MongoDB',
                    'Git',
                    'Docker',
                    'AWS',
                    'Tailwind CSS',
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