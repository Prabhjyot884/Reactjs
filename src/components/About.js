import React from 'react'
import bea from '../assests/bea.mp4'
import bene from '../assests/bene.png'
import benefits from '../assests/combenefits.png'
import lisa from '../assests/lisa.jpg'
import mari from '../assests/maridickey.jpg'
import rosa from '../assests/Rosalie.jpg'
import rachel from '../assests/RachelScott.jpg'


const About = () => {
  return (
    <div>
    <div className='w-full h-screen relative'>
    <video
        className='w-full h-full object-cover contrast-75'
        src={bea}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='text-white transition-transform text-6xl'>A Step towards a Healthy and Peaceful life</h1><br></br>
            <h3>Practicing Yoga and Meditation daily will help you improve flexibility and strength. <br></br><br></br>
            Yoga and meditation help improve mental health and control mood swings, depression and anxiety.<br></br><br></br>
            Yoga helps build a routine lifestyle that can help improve your sleep cycle and relax you.<br></br><br></br>
            The mental health benefits of meditation include better focus and concentration,improved <br></br> 
             self-awareness and self-esteem, lower levels of stress and anxiety, and fostering kindness.</h3><br></br>
            </div>
        </div>
        
        <div className=' py-11 grid md:grid-cols-3 grid-rows-none'>
        <div className=' bg-white text-slate-900 m-4 p-8  shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 ml-28'>Who we are</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>Your mind’s best friend. We’re here for you whenever you need us, wherever you are,
             helping you get through tough times and find joy in every day.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1 ml-28'>What we do</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>Through science-backed meditation and mindfulness tools,
             We helps you create life-changing habits to support your mental health and find a healthier, happier you.</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8  shadow-2xl'>
          <span className=' align-middle text-slate-600 font-bold text-2xl uppercase px-3 py-1  ml-28'>Why we do it</span>
          <div className=' py-16 content-center items-center'>
            <p className=' text-center text-xl'>We help you reduce stress by 14% in few days.
             It can also help you relax your mind in minutes, improve focus, and get the best sleep ever.</p>
          </div>
        </div>
        </div>
        <div class=" grid md:grid-cols-2 py-8 mr-52 ml-52 ">
        <img class="w-[480px] h-[960px] " src={bene} alt='/' />
        <img class=" w-[1060px] h-[480px]" src={benefits} alt='/' />
        </div>
        <div className='bg-white text-slate-900 py-12 m-14 p-10  shadow-2xl'>
        <section className="container min-h-screen mx-auto px-4 pb-20 lg:px-0" id="trainers">
        <header>
          <h2 className="font-black text-center py-14 uppercase text-3xl md:text-4xl">Meet our Professional Trainers</h2>
          <div className="border-b-4 border-primary w-2/12 mx-auto mt-3"></div>
        </header>
        <section className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9">
          <article>
            <div className="bg-trainer-1 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
            <img className=' h-80 w-80' src={lisa} alt='/' />
              <span className="bg-white px-8 py-3 absolute bottom-5 left-0 font-bold">Lisa</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-2 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
            <img className=' h-80 w-80' src={mari} alt='/' />
              <span className="bg-white px-6 py-3 absolute bottom-5 left-0 font-bold">Mari Dickey</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-3 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
            <img className=' h-80' src={rachel} alt='/' />
              <span className="bg-white px-6 py-3 absolute bottom-5 left-0 font-bold">Rachel Scott</span>
            </div>
          </article>
          <article>
            <div className="bg-trainer-4 bg-style border-primary border-8 w-5/6 h-96 mx-auto relative">
            <img className=' h-80' src={rosa} alt='/' />
              <span className="bg-white px-6 py-3 absolute bottom-5 left-0 font-bold">Rosalie</span>
            </div>
          </article>
        </section>
        </section>
        </div>
        <div className='bg-white text-slate-900 py-12 m-14 p-10 rounded-xl shadow-2xl'>
        <section className="font-inter bg-faq-bg bg-cover" id="contact">
      <section className="container mx-auto min-h-screen flex items-center flex-col md:flex-row py-28 px-4 lg:px-0">
        <section className="flex-1">
          <header className="border-l-4 border-primary text-black">
            <h2 className="font-black uppercase text-3xl ml-32 md:text-4xl pl-2 md:w-2/3">Frequently Asked Questions</h2>
          </header>
          <p className="text-black ml-28 py-7 leading-relaxed w-3/4">
            Questions not answered? Don't worry you can contact us directly through our contact number or our official
            email address and rest of details are given on the contact page.
          </p>
          
        </section>
        <section className="flex-1 w-full mt-14 md:mt-0">
          <details className="mb-2" >
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
            How Much Should I Meditate?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">Recent research from neuroscientist Amishi Jha discovered that 12 minutes of meditation,
               5 days a week can protect and strengthen your ability to pay attention.</p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
            How is yoga different from meditation?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">
              Meditation (dhyana) is a part of total yoga practice. Yoga is composed of eight basic principles.
              <ul className=' list-disc gap-0'>
                <li>Rules for living in society (Yama)</li>
                <li>Self-restraining rules (Niyama)</li>
                <li>Low physical impact postures (Asana)</li>
                <li>Breathing techniques (Pranayama)</li>
                <li>Detachment of the mind from senses (Pratihara)</li>
                <li>Concentration (Dharana)</li>
                <li>Meditation (Dhyana)</li>
                <li>Complete union with super consciousness (Samadhi)</li>
              </ul>
              </p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
            Do I need special equipment for yoga practice?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">Hardly. All you need is a nonslip yoga mat that is long enough to lay fully stretched on your back.</p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
            How often and for how long should I do the asanas?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">
              In the beginning, try to do it three times a week, each session lasting for about 45 minutes.
               After some practice, increase it to five times a week, for an hour each time.
              </p>
            </div>
          </details>
        </section>
      </section>
    </section>
    </div>
        </div>
      
      
        
        
  )
}

export default About