
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import BM from "../assets/Project/logo.png"
import Me from "../assets/Project/me.png"
import Lig from "../assets/Project/logo.jpg"



const Project = () => {

  const testimonials = [
    {
      quote:
        "✨ Designed and developed a fully responsive Ecommerce website to showcase BetterMagic's Products and contact options.= ✨ Implemented user friendly layouts and professional UI.=✨ Developed dynamic backend features for managing customers and orders.= ✨ Enhanced user interaction and Ensured cross - browser compatibility and mobile responsiveness for an optimal experience.",
      name: "Better Magic",
      designation: "E-commerce site",
      src: BM,
      tech: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
      code: "GitHub",
      link: "Live Link",
      glink: "https://github.com/Ezhil53/Better-Magic",
      live: "https://bettermagic.in",


    },
    {
      quote:
        "🚀 Created a clean and responsive personal portfolio to showcase my projects, skills, and contact information.= 🚀 Designed with a focus on user experience, visual consistency, and modern design principles.= 🚀 Included interactive elements, smooth navigation, and clear highlight of my works.= 🚀 Continuously updated with new projects and improvements to reflect current skills and experience.",
      name: "Portfolio",
      designation: "Ddetails about me",
      src: Me,
      tech: "React JS, Tailwindcss, Aceternity UI, EmailJS, Lucide Icons",
      code: "GitHub",
      link: "Live Link",
      glink: "https://github.com/Ezhil53/my-portfolio",
      live: "#",

    },
    {
      quote:
        "🎯 Built a basic business website layout during the early stage of my learning journey.= 🎯 Designed product listings, homepage, blos and service pages.= 🎯 Focused on structure, styling, and layout while practicing core web development concepts.= 🎯 Helped strengthen my understanding of responsive design and User experience.= 🎯 Served as a foundation for learning more advanced web development features later on.",
      name: "Lighten",
      designation: "Static Website",
      src: Lig,
      tech: "HTML, CSS, JavaScript, Bootstrap",
      code: "GitHub",
      link: "Live Link",
      glink: "https://github.com/Ezhil53/electronics-shop",
      live: "https://ezhil53.github.io/electronics-shop/",
    },
  ];

  return (
    <>

      <section id="project" className='bg-transparent project-sec md:h-screen container mx-auto mb-10 mt-6'>
        <div className='text-center pt-30'>
          <h1 className='text-black text-5xl text-center font-bold leading-15'>Projects</h1>
          <p className='text-gray-500'>Some of my works !</p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

    </>
  )
}

export default Project
