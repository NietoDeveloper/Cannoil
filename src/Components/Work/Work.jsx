import './Work.css';
import { FreeScreenshots, BootScreenshots } from '../../assets/data/Screenshots';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Work = () => {
    return (
        <main className='work-main pt-5 md:pt-10 pb-10 border-t-[3px] md:border-t-0'>
            <header id='Work' className='flex flex-col items-center'>
                <h1 className='work-header text-3xl'>Aceites CBD</h1>
            </header>
            <section>
                {/* small */}
                <h2 className='projects-header md:hidden text-center text-2xl pb-1'>Extracto De Flores De Cannabis</h2>
                <main className='md:hidden flex flex-row justify-evenly w-full pb-5 text-sm md:text-[.6rem]'>
                    <article className='work-container text-center w-5/12'>
                        {FreeScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><span>Producto Colombo-Aleman</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center w-5/12'>
                        {FreeScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><span>Producto Importado</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
                <h2 className='projects-header md:hidden text-center pb-1 text-2xl'>Aceites De CBD En Concentracion Del 10% 15% 20% 25% 30% 40%</h2>
                <main className='md:hidden flex flex-row justify-evenly w-full text-sm md:text-[.6rem]'>
                    <article className='work-container text-center w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics my-1 w-44' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><span>Producto Importado</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><span>Producto Importado</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
            </section>
            {/* medium and large */}
            <h2 className='projects-header hidden md:block text-center pb-3 text-2xl'>Extracto De Flores De Cannabis</h2>
            <main className='hidden md:flex justify-evenly pb-5 text-md lg:text-xl'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics md:w-44 lg:w-56 my-1' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><span>Producto Colombo-Aleman</span></i>
                        </button>
                    </article>
                ))}
            </main>
            <h2 className='projects-header hidden md:block text-center pb-3 text-2xl'>Aceites De CBD En Concentracion Del 10% 15% 20% 25% 30% 40%</h2>
            <main className='hidden md:flex justify-evenly text-md lg:text-xl'>
                {BootScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics md:w-44 lg:w-56 my-1' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><span>Producto Importado</span></i>
                        </button>
                    </article>
                ))}
            </main>
        </main>

    )
}

export default Work