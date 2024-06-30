import './Landing.css';
import Logo from '/LogoCannOil-2.png'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-main-container hidden md:flex justify-center w-full h-screen'>
                <article className='fade-out flex flex-col justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h2 className='logo-text text-5xl border-y-2 pt-2 pb-3 mt-2'>CannOil</h2>
                </article>
            </main>
            {/* sm  */}
            <main className='sm-landing-main-container flex justify-center md:hidden w-full h-screen'>
                <article className='sm-fade-out flex flex-col justify-center items-center w-full h-screen '>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <h2 className='sm-logo-text text-3xl border-y-[1px] pt-1 pb-2 mt-2'>CannOil</h2>
                </article>
            </main>
        </>
    )
}

export default Landing