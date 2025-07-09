import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, LocateFixed, Linkedin, Github, Phone, ArrowUpRight, Rocket } from 'lucide-react';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import Globe from '../assets/place.svg'
import { toast } from 'sonner';



const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
        );
        gsap.fromTo(
            formRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.2, delay: 0.3, ease: 'power2.out' }
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.warning('Please enter your name.', {
                style: {
                    backgroundColor: '#ffe5e5',
                    color: '#b00020',
                    border: '1px solid #b00020',
                },
            });
            return false;
        }
        if (!formData.email.trim()) {
            toast.error('Please enter your email.',{
                style: {
                    backgroundColor: '#ffe5e5',
                    color: '#b00020',
                    border: '1px solid #b00020',
                },
            });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address.',{
                style: {
                    backgroundColor: '#ffe5e5',
                    color: '#b00020',
                    border: '1px solid #b00020',
                },
            });
            return false;
        }
        if (!formData.message.trim()) {
            toast.error('Please enter your message.',{
                style: {
                    backgroundColor: '#ffe5e5',
                    color: '#b00020',
                    border: '1px solid #b00020',
                },
            });
            return false;
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        toast.loading('Sending...');

        emailjs
            .send(
                'service_o2oholv',
                'template_uijb8uo',
                formData,
                'bd8KXxHsTjP_-CXqj'
            )
            .then(() => {
                toast.success('Message sent successfully!',{
                    style: {
                    backgroundColor: '#b9faac',
                    color: '#126e00',
                    border: '1px solid #126e00',
                },
                });
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed to send message.',{
                    style: {
                    backgroundColor: '#ffe5e5',
                    color: '#b00020',
                    border: '1px solid #b00020',
                },
                });
            });
    };

    return (
        <section ref={sectionRef} id="contact" className="min-h-screen relative bg-gray-100 text-black px-4 py-16">
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold">Contact Me</h2>
                <p className="text-gray-400 mt-2">Let's connect and work together!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                <div ref={formRef} className="bg-white opacity-80 rounded-2xl p-8 shadow-xl">
                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-zinc-100 text-black placeholder-gray-300 border border-zinc-100"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-zinc-100 text-black placeholder-gray-300 border border-zinc-100 "
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <Textarea
                                id="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-zinc-100 text-black  placeholder-gray-300 border border-zinc-100 min-h-[110px]"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button type="submit" className="bg-orange-400 hover:bg-orange-600  transition duration-300 ease-in-out text-white max-md:w-[50%] rounded-[30px] p-3 w-1/4 gap-4 text-md">
                                Send <Rocket />
                            </Button></div>
                    </form>
                </div>

                <div ref={formRef} className="space-y-4 text-sm text-gray-300 flex justify-center items-center flex-col md:items-end">

                    <div className="flex items-center gap-3 w-1/2 max-md:w-[75%] bg-white opacity-90 p-4 rounded-[30px] hover:shadow-lg  hover:opacity-100">
                        <LocateFixed className="text-orange-400" /> <span className='text-gray-600'>Chennai, Tamil Nadu</span>
                    </div>
                    <a href="tel:+919751921853" className="flex items-center gap-3 w-1/2 max-md:w-[75%]  bg-white opacity-90  p-4 rounded-[30px] hover:shadow-lg  hover:opacity-100">
                        <Phone className="text-orange-400" /> <span className='text-gray-600'>+91 9751921853</span>
                    </a >
                    <a href="mailto:mahiezhil53@gmail.com" target='_blank' className="flex items-center gap-2 w-1/2 max-md:w-[75%]  bg-white opacity-90  group hover:opacity-100 p-4 rounded-[30px] cursor-pointer hover:shadow-lg ">
                        <Mail className="text-orange-400 me-2" />  <span className="text-gray-600 flex cursor-pointer gap-5 items-center">
                               Gmail
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/ezhilarasuk/" target='_blank' className="flex items-center gap-3 w-1/2 max-md:w-[75%]  bg-white opacity-90 group  p-4 rounded-[30px] hover:shadow-lg  hover:opacity-100">
                        <Linkedin className="text-orange-400" /> <span  className="flex items-center gap-5 text-gray-600  ">  LinkedIn
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                        </span>
                    </a>
                    <a href="https://github.com/Ezhil53" target='_blank' className="flex items-center gap-3 w-1/2  max-md:w-[75%]  bg-white opacity-90 group  p-4 rounded-[30px] hover:shadow-lg  hover:opacity-100">
                        <Github className="text-orange-400" /> <span className="flex items-center gap-5 text-gray-600 ">
                            GitHub
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100  transition-opacity duration-300" />
                        </span>
                    </a>
                </div>


            </div>
            <div className="absolute bottom-10  right-20 w-1/2 h-1/2 -z-5 opacity-40 pointer-events-none">
                <img src={Globe} alt="place" /></div>
        </section>
    );
};

export default Contact;
