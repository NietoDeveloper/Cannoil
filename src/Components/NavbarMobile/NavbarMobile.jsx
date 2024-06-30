import './NavbarMobile.css';
import { Navlinks } from '../../assets/data/NavLinks';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { Sling as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false))

    return (
        <main id='navbar-mobile' className='navbar-mobile'>
            <nav ref={ref} className='md:hidden flex justify-between items-center w-full h-20'>
                <header className='flex flex-col justify-center w-1/3 h-full pl-8'>
                    <h1 className='kurzawa text-2xl'>CannOil</h1>
                    <h2 className='development text-sm'>Colombia</h2>
                </header>
                <article className='pr-2'>
                    <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} color='#eed29b' rounded easing='ease-in' />
                </article>
                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className='dropdown absolute left-0 right-0 top-20 p-5'
                        >
                            <ul className='grid gap-2'>
                                {Navlinks.map((route, idx) => {
                                    return (
                                        <motion.li
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + idx / 10,
                                            }}
                                            key={route.id}
                                            className="w-full p-[0.08rem] rounded-lg bg-gradient-to-tr from-[rgba(152,13,27,0.8)] via-[rgba(238,210,155,0.6)] to-[rgba(152,13,27,0.41)]"
                                        >
                                            <a
                                                onClick={() => setIsOpen((prev) => !prev)}
                                                className={
                                                    "navlink flex items-center justify-between w-full p-[.6rem] rounded-lg"
                                                }
                                                href={route.link}
                                            >
                                                <span className="flex gap-1 text-lg">{route.title}</span>
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </nav>
        </main>

    )
}

export default NavbarMobile