"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface NavlinkProps {
  label: string;
  path: string;
}

const Navlink: React.FC<NavlinkProps> = ({ label, path }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ${
          isActive 
            ? 'text-[#47f969]' 
            : 'text-white hover:text-[#D6F9C6]'
        }`}
        href={path}
        onClick={handleClick}
      >
        {label}
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#47f969] to-[#D6F9C6] rounded-full transform origin-bottom transition-all duration-300 ${
            isActive 
              ? 'scale-x-100 opacity-100' 
              : isHovered 
                ? 'scale-x-50 opacity-70' 
                : 'scale-x-0 opacity-0'
          }`}
        />
      </Link>
      
      {/* Glow effect */}
      <span
        className={`absolute -bottom-1 left-0 w-full h-1 blur-sm bg-[#47f969]/40 rounded-full transition-opacity duration-300 ${
          isActive 
            ? 'opacity-80' 
            : isHovered 
              ? 'opacity-40' 
              : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Navlink;
