import './About.css'
import Logo from '/BotellaHoja.png'

const About = () => {
    return (
        <main className='about-main flex flex-col md:flex-row items-center md:justify-evenly w-full h-fit md:h-[30rem] border-t-[1px] md:border-t-0'>
            <header className='welcome-message flex flex-col justify-center w-full md:w-1/3 h-fit md:h-full px-8 py-4 lg:px-16 md:py-16 md:border-r-[3px]'>
                <h2 className='hello text-start md:py-1 text-xl md:text-2xl'>CBD <span className='my'>Extracto De Flores </span><span className='name'>De </span><span className='is'>Cannabis</span></h2>
                <h1 className='kris-text text-start py-1 text-5xl lg:text-6xl'>CannOil <span className='kurzawa-text'>Aceites CBD</span></h1>
                <h2 className='description text-start py-1 text-3xl md:text-4xl'>Tienda On-Line</h2>
            </header>
            <div>
                <img src={Logo} alt="" className='' />
            </div>
            <article className="about flex justify-center items-center md:w-2/3 h-fit md:h-full p-8 md:border-l-[4px] border-b-[3px] md:border-b-0 border-t-[2px] md:border-t-0 w-full lg:p-16  text-md md:text-xl">
                <h3 className='about-text'>Importador y Distribuidor;  De Aceites de extracto de cannabis, en varios porcentajes de concentrancion. Dedicados a la salud y bienestar. 100% naturales y fabricados con las mejores tecnicas, expertos y laboratorios en el campo. Aceites en concentracion del 10% 15% 20% 25% 30% 40% <h1><span className='kurzawa-text'>Envio Gratis*</span></h1></h3>
            </article>
        </main>
    )
}

export default About