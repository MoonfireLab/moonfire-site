import { aboutNavData } from '@/constants/aboutNavBar';
import { AnimatePresence, delay } from 'framer-motion';
import { motion as motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react'

const NavLinks = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

  return (
  <>
  {
    aboutNavData.map(({ _id, title, href }) => (
        <Link
            key={_id}
            href={href}
            className="relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base
             text-orange-700 transition-colors"
            onMouseEnter={() => setHoverIndex(_id)}
            onMouseLeave={() => setHoverIndex(null)}
        >
            <AnimatePresence>
                {hoverIndex === _id && (
                    <motion.span
                    className="absolute inset-0 text-orange-400 rounded-lg bg-gray-100"
                    layoutId="hoverBackground"
                    initial = {{ opacity: 0}}
                    animate = {{ opacity: 1, transiction: { duration: 0.15 } }}
                    exit = {{ opacity: 0, transition: { duration: 0.15, delay: 0.2 },
                    }}
                    />
                )}
            </AnimatePresence>
            <span className="relative z-10">{title}</span>
        </Link>
    ))}
  </>
  );
};

export default NavLinks;