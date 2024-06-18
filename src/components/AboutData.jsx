/*const AboutData = [
  {
    id: '1',
    journey: 'Cosmic Blasters3',
    text: 'description3',
    why: 'because',
    link: 'https://johndcgsantos.github.io/ironGame/',
  },
  {
    id: '2',
    journey: 'Cosmic Blasters3',
    text: 'description3',
    why: 'because',
    link: 'https://johndcgsantos.github.io/ironGame/',
  },
  {
    id: '3',
    journey: 'Cosmic Blasters3',
    text: 'description3',
    why: 'because',
    link: 'https://johndcgsantos.github.io/ironGame/',
  },
  {
    id: '4',
    journey: 'Cosmic Blasters3',
    text: 'description3',
    why: 'because',
    link: 'https://johndcgsantos.github.io/ironGame/',
  },
]
export default AboutData*/

const AboutData = [
  {
    id: '0',
    category: 'My journey',

    content:
      'During my time at Ironhack, I immersed myself in coding and web development concepts, gaining proficiency in technologies such as HTML, CSS, JavaScript, React, and more. Through intensive projects and hands-on learning, I honed my skills in crafting user-friendly interfaces, writing clean code, and problem-solving.',
  },

  {
    id: '1',
    category: 'Why Web Development?',
    content:
      "My journey into web development was fueled by a desire to merge my analytical mindset from my previous career with my creativity and passion for technology. I'm excited about the endless opportunities for innovation and collaboration in the tech world, and I'm eager to contribute to projects that make a positive impact.",
  },

  {
    id: '2',
    category: 'Continuous learning',
    content:
      "As a lifelong learner, I'm committed to staying up-to-date with the latest industry trends and best practices. I thrive in dynamic environments and am always seeking ways to enhance my skills and contribute to meaningful projects.",
  },
  {
    id: '3',
    category: 'Skills',
    content: (
      <div className='contentor-skills'>
        <li className='skills-left'>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>JavaScript</ul>
          <ul>Bootstrap</ul>
        </li>

        <li className='skills-medium'>
          <ul>MongoDB</ul>
          <ul>EJS</ul>
          <ul>Express</ul>
          <ul>Rest APIs</ul>
        </li>

        <li className='skills-right'>
          <ul>React</ul>
          <ul>Git</ul>
          <ul>GitHub</ul>
          <ul>NodeJS</ul>
        </li>
      </div>
    ),
  },
]

export default AboutData
