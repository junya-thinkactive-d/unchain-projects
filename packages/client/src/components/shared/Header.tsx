import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { projects } from '../../constants/projects';

const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <>
      {' '}
      <header className="bg-white dark:bg-gray-800">
        <nav className="bg-white dark:bg-gray-800">
          <div className="container p-6 mx-auto">
            <Link href="/">
              <a className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
                UNCHAIN PROJECTS
              </a>
            </Link>

            <div className="flex items-center flex-wrap justify-center mt-6 text-gray-100 capitalize dark:text-gray-800 bg-gray-800 dark:bg-gray-100 p-2">
              {projects.map((project) => (
                <Link href={`/${project.link}`} key={project.id} >
                  <a
                    className={`normal-case ${
                      path === `/${project.link}`
                        ? 'normal-case text-sky-300 border-b-2 border-blue-500 sm:mx-6'
                        : 'border-b-2 border-transparent hover:text-gray-500 hover:border-blue-500 sm:mx-6'
                    }`}
                  >
                    <span className='mx-2'>●</span>{project.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
