import emailIcon from '../../assets/icon-email.svg';
import phoneIcon from '../../assets/icon-phone.svg';

export const Contact = () => {
    return (
        <section id="contact" className="bg-white py-20">
            <div className="container-section grid grid-rows-2 md:grid-rows-1 
                grid-cols-1 md:grid-cols-2 gap-12">
                <div className="font-poppins flex flex-col gap-6 col">
                    <h1 className="font-lora text-4xl md:text-5xl text-black font-medium tracking-widem">Contact us</h1>
                    <p className="mt-3 text-lg text-balance leading-relaxed">
                        Got a question or feedback? We are here to help! Reach out to us via email,
                        phone, or fill out the form and we will get back to you ASAP.
                    </p>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='block'>
                            <img className='min-w-8 min-h-8' src={emailIcon} />
                        </div>
                        <p>peaceapp@gmail.com</p>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='block'>
                            <img className='min-w-8 min-h-8' src={phoneIcon} />
                        </div>
                        <p>+51 839 293 299</p>
                    </div>
                </div>
                <form className='border-slate-400 border-[1px] px-6 py-8 font-poppins flex flex-col gap-6 bg-white'
                    onSubmit={(e) => e.preventDefault()}>
                    <div className='flex flex-row flex-wrap xl:flex-nowrap items-stretch gap-5'>
                        <div className='flex flex-col gap-2 w-full'>
                            <h2>First Name <span className='text-sm text-red-700'>*</span></h2>
                            <input className='p-2 bg-gray rounded-sm' type='text' name='name' placeholder='Enter your first name' />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h2>Last Name <span>*</span></h2>
                            <input className='p-2 bg-gray rounded-sm' type='text' name='name' placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <h2>Email <span>*</span></h2>
                        <input className='p-2 bg-gray rounded-sm' type='email' name='name' placeholder='email@address.com' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <h2>Phone Number <span>*</span></h2>
                        <input className='p-2 bg-gray rounded-sm' type='number' name='name' placeholder='999 999 999' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <h2>What can we help you with?</h2>
                        <textarea className='p-2 bg-gray h-52 resize-none rounded-sm' name='message' />
                    </div>
                    <button className='
                        bg-sky-900 py-3 mt-3 text-lg text-white rounded-full uppercase font-poppins font-medium tracking-wider'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
