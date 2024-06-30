import './Navbar.css';
import { Navlinks } from '../../assets/data/NavLinks';

const Navbar = () => {

    return (
        <main id='navbar' className=''>
            <nav className='hidden md:flex h-32'>
                <header className='flex flex-col justify-center w-1/3 h-full pl-16'>
                    <h1 className='kurzawa text-2xl md:text-6xl'>CannOil</h1>
                    <h2 className='development text-3xl'>Colombia</h2>
                </header>
                <ol className='nav-link-container flex justify-evenly items-end w-2/3 h-full'>
                    {Navlinks.map((item) => (
                        <li key={item.id} className='nav-link mb-4 text-3xl'>
                            <a href={item.link} className=''>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </main>

    )
}

export default Navbar