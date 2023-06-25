import Image from 'next/image';
import React from 'react'

const AboutSection = () => {

    interface skillType {
        skill: string;
    }

const skills: skillType []= [
    { skill: "UI Desgin" },
    { skill: "UX Researcher" },
    { skill: "Product Designer" },
    { skill: "Product Developer" },
    { skill: "Figma" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React JS" },
    { skill: "Redux/Toolkit" },
    { skill: "Node JS" },
    { skill: "Express JS" },
    { skill: "SQL" },
    { skill: "Mongo DB" }
];

  return (
    <section id='about'>
        < div className='bg-green-300 my-12 pb-12 md:pt-16 md:pb-30'>

            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-14 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>

            <div className='flex flex-wrap'>
            <div className='bg-gray-300 text-center md:w-1/2 md:text-left'>
                <h1 className="tex-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is Muhammad Faizan Tariq and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Product Designer and Developer.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-yellow-500">
                never stop learning & growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            </div>


        <div className='bg-yellow-300 text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6 mt-1'>Skill Set</h1>
            <div className='flex flex-wrap justify-center z-10 md:justify-start'>
                {skills.map( (item, idx)=> {
                    return(
                    <p 
                    key={idx}
                    className='bg-black px-4 py-2 mr-2 mt-2 text-yellow-500 rounded font-medium'
                    >
                        {item.skill}
                    </p>
                    )
                })}
            </div>
            <Image
                src="/About-img.png"
                alt="About-Me Image"
                width={325}
                height={325}
                className='hidden md:block md:relative  md:left-32 md:z-0'
                /> 
        </div>
            </div>

            
        </div>
    </section>
  )
}

export default AboutSection