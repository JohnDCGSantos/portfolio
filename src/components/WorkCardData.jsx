import CosmicBlasters from '../CosmicBlasters.png'
import spaceB from '../spaceB.png'
import project2 from '../project2.png'
import project3 from '../project3.png'
import DocPort from '../DocPort.png'
const WorkCardData = [
  {
    id: 1,
    imgsrc: DocPort,

    title: 'Gestão de Urgências Hospitalares (Emergency Medshift Scheduler)',

    text: ' "I designed this application to streamline the administration of medical schedules, custom-tailored to comply with the regulations of a Portuguese hospital. Behind the scenes, I utilized JavaScript for server-side logic, with Express and Node.js, Bcrypt for secure password management, and MongoDB as a robust database. On the client side, EJS and Views were employed to create a user-friendly experience, complemented by CSS for aesthetic appeal. This application is purpose-built to simplify the generation of medical schedules while aligning with the unique protocols of a specific hospital. It has been a fulfilling journey, and I am always eager to learn and refine my skills. Moreover, I am committed to adapting this application to the specific requirements of other hospitals should the need arise."',

    skills: ' -Express · Node.js · Bcrypt · EJS · MongoDB · JavaScript · HTML · CSS & Bootstrap-',

    link: 'https://emergency-medshift-scheduler.adaptable.app/',
  },
  {
    id: 2,
    imgsrc: spaceB,

    title: 'Space Bubble',

    text: ' "Embark on an epic adventure with Space Bubble, a mesmerizing game where the worlds of DOM manipulation, Object-Oriented Programming (OOP), canvas rendering, and GSAP animation converge. Command your spacebubble through a canvas-rendered galaxy, employing OOP principles to navigate and interact with a dynamic DOM-driven interface. Engage with a variety of JavaScript-driven features, including colorful enemy encounters, power-up mechanics, and real-time scoring, creating a visually stunning spectacle. Prepare for an interstellar journey that showcases the magic of JavaScript gaming like never before!"',

    skills: ' -JavaScript · HTML · CSS · Canvas · gsap-',

    link: 'https://johndcgsantos.github.io/Space-Bubble/',
  },
  {
    id: 3,
    imgsrc: project3,
    title: 'LinkdIron',
    text: 'LinkdIron is a networking platform that enables users to connect, share posts about events, job opportunities, and valuable insights. Users can create, read, update, and delete posts containing text, images, and videos. They can also search for and follow/unfollow other users. The client utilizes React, while the server and REST APIs are built with Express.js.',
    skills:
      '-React · Rest APIs · Express · Node.js · MongoDB · JavaScript · HTML · CSS & Bootstrap-',
    link: 'https://linkdiron.netlify.app/Signup',
  },
  {
    id: 4,
    imgsrc: project2,
    title: 'Fitness App',
    text: 'Built on Express.js and EJS templating, FitnessApp empowers users to create personalized exercise plans with 400+ exercises. Craft multiple plans with instructions and images, and seamlessly manage updates or deletions.',
    skills: '    -Express · Node.js · EJS · MongoDB · JavaScript · HTML · CSS & Bootstrap-',
    link: 'https://fitnessgo.adaptable.app',
  },

  {
    id: 5,
    imgsrc: CosmicBlasters,

    title: 'Cosmic Blasters',

    text: '"Cosmic Blasters" is my first ever project done 3 weeks after begining my web development journey; is a browser-based shooting game that draws inspiration from retro space-ship shooters. Developed using fundamental technologies such as JavaScript, HTML, and CSS, the game operates through DOM manipulation and object-oriented programming principles.',

    skills: ' -JavaScript · HTML · CSS · Bootstrap-',

    link: 'https://johndcgsantos.github.io/ironGame/',
  },
]
export default WorkCardData
