"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavlinkProps {
  label: string;
  path: string;
}

const Navlink: React.FC<NavlinkProps> = ({ label, path }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = document.getElementById(path.replace('#', ''));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
      history.pushState(null, '', path);
    }
  };

   useEffect(() => {
    const target = document.getElementById(path.replace('#', ''));
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
        if (entry.isIntersecting) {
          history.pushState(null, '', path);
        }
      },
      { threshold: [0], rootMargin: '-50% 0px -50% 0px' }
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [path]);

  return (
     <Link
      className={`w-screen lg:w-fit transition-all hover:duration-700 ease-in duration-400 px-3 mx-3 rounded-full cursor-pointer hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white focus:active my-3 ${isActive ? 'active' : ''}`}
      href={path}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

export default Navlink;
