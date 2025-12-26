"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
  BookOpen,
  Award,
  User,
} from 'lucide-react';
import { useRouter, usePathname } from "next/navigation";

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';

import { useEffect, useState } from "react";

const sections = [
  {
    id: 'home',
    title: 'Home',
    icon: <HomeIcon className='h-full w-full ' />,
    href: '/',
  },
  {
    id: 'about',
    title: 'About',
    icon: <User className='h-full w-full ' />,
    href: '/#about',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <LightbulbIcon className='h-full w-full ' />,
    href: '/#skills',
  },
  {
    id: 'education',
    title: 'Education',
    icon: <GraduationCap className='h-full w-full ' />,
    href: '/#education',
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: <FolderGit2 className='h-full w-full ' />,
    href: '/#projects',
  },
  {
    id: 'blog',
    title: 'Blog',
    icon: <BookOpen className='h-full w-full ' />,
    href: '/blog',
  },
  {
    id: 'badges',
    title: 'Badges',
    icon: <Award className='h-full w-full ' />,
    href: '/badges',
  },
  {
    id: 'contact',
    title: 'Contact us',
    icon: <Mail className='h-full w-full ' />,
    href: '/#contact',
  },
  {
    id: 'more',
    title: 'More',
    icon: <MoreHorizontal className='h-full w-full ' />,
    href: '/#more',
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Set active section based on pathname
    if (pathname === '/blog') {
      setActiveSection('blog');
    } else if (pathname === '/badges') {
      setActiveSection('badges');
    } else if (pathname === '/') {
      const handleScroll = () => {
        // Kiểm tra xem có đang scroll không (để thêm hiệu ứng)
        if (window.scrollY > 10) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }

        // Xác định section hiện tại
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(sections[i].id);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Gọi ngay để set initial state

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  const handleNavigation = (section: typeof sections[0]) => {
    if (section.href.startsWith('/#')) {
      // Scroll to section on home page
      if (pathname !== '/') {
        router.push(section.href);
      } else {
        const sectionId = section.href.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Navigate to different page
      router.push(section.href);
    }
  };

  return (
    <div className={cn(
      "fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit z-[+9999999] transition-all duration-300",
      scrolling 
        ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg rounded-full py-2" 
        : "bg-transparent"
    )}>
      <Dock className='items-end pb-3 rounded-full'>
        {sections.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(item)}
            className="cursor-pointer"
          >
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                activeSection === item.id && " bg-gray-100 !border !border-primary-sky"
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon className={cn(activeSection === item.id && "text-[#2f7df4]")}>
                {item.icon}
              </DockIcon>
            </DockItem>
          </button>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
