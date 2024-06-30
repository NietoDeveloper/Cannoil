import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import KrisKurzawaPic from '/LogoCannOil-2.png';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your email ${name}!  I will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <main id='contact' className='flex flex-col items-center border-b-[3px] md:border-b-0 border-t-[1px] md:border-t-0'>
            <article className='pic-form-container flex flex-col lg:items-none md:flex md:flex-row md:justify-evenly h-fit md:h-[28rem]'>
                <section className='pic-container flex flex-col justify-center items-center w-full h-full md:w-1/3 md:h-[100%] md:border-r-[3px]'>
                    <LazyLoadImage src={KrisKurzawaPic} className='kris w-10/12 h-auto mt-6 md:mt-0' />
                    <section className='flex justify-evenly p-2 w-full'>
                        <button onClick={() => setTimeout(() =>
                            window.open('/KrisKurzawaResume.pdf', '__blank')
                            , 500)} className='res-cer-btn text-md'>Beneficios a la Salud</button>
                        <button onClick={() => setTimeout(() =>
                            window.open('/MSUCertificateofCompletion.pdf', '__blank')
                            , 500)} className='res-cer-btn text-md'>Tratamientos</button>
                    </section>
                </section>
                <form onSubmit={handleSubmit} className='email-form flex flex-col items-center  w-full h-fit md:w-2/3 md:h-full lg:px-10 border-t-[2px] md:border-t-0 md:border-l-[4px]'>
                    <article className='flex flex-col w-4/5 md:w-3/4 pt-5'>
                        <h2 className="drop-me-a-line w-3/4 pb-1 text-3xl lg:text-3xl font-bold">Mensaje A CannOil</h2>
                        <input
                            className='input'
                            type='text'
                            placeholder='Tu Nombre'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className='input'
                            type='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className='input'
                            type='subject'
                            placeholder='Asunto'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <textarea
                            className='input'
                            cols='30'
                            rows='5'
                            placeholder='Mensaje'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                        </textarea>
                        <section className='hidden md:flex justify-between items-center'>
                            <button className='submit-btn md:mb-0 md:w-32 bg-[#100607]' type='submit'>Enviar</button>
                            {errorMessage && (
                                <p className="error-text text-xl lg:text-2xl">{errorMessage}</p>
                            )}
                        </section>
                        <button className='md:hidden submit-btn w-32 mb-5 md:mb-0 md:w-32 bg-[#100607]' type='submit'>Enviar</button>
                    </article>
                    {errorMessage && (
                        <p className="error-text md:hidden text-center mb-5 text-xl lg:text-2xl">{errorMessage}</p>
                    )}
                </form>
            </article>
        </main>
    )
}

export default Contact