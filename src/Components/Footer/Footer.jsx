import './Footer.css';
import { icons } from '../../assets/data/SMIcons';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col items-center border-t-[1px] md:border-t-0'>
            <article className='flex'>
                {icons.map((item) => (
                    <i key={item.id} className='social-icons text-xl p-3 md:p-5 lg:p-7 lg:text-5xl '><button onClick={() => setTimeout(() =>
                        window.open(item.link, '_blank')
                        , 500)} >
                        {item.symbol}
                    </button></i>
                ))}
            </article>
            <article className='flex flex-col items-center text-sm md:text-md'>
                <h2 className='top-link md:hidden mb-1 md:mb-3'><a href='#navbar-mobile'>Ir Arriba</a></h2>
                <h2 className='top-link hidden md:block mb-1 md:mb-3'><a href='#navbar'>Ir Arriba</a></h2>
                <h2 className='mailto-link mb-1 md:mb-3'> <button onClick={() => setTimeout(() =>
                    window.open('mailto:NietoSoftWareDeveloper@outlookcom')
                    , 500)} >Email CannOil</button></h2>
                <p className='mb-1 md:mb-3'>CopyRights &copy; {today.getFullYear()} Bogota Colombia</p>
                <h2 className='webdev-link mb-4 md:mb-8'>Nieto Software Developer</h2>
            </article>

        </footer>
    )
}

export default Footer