import '..//Workcard.css'

const WorkCard = WorkCardData => {
  return (
    <div className='Project-card'>
      <a href={WorkCardData.link} target='_blank' rel='noopener noreferrer'>
        <h2 className='project-title'>{WorkCardData.title}</h2>
      </a>
      <div className='imgCardP'>
        <img src={WorkCardData.imgsrc} alt='image' />
      </div>

      <div className='details'>
        {WorkCardData.text}

        <div className='skills'>{WorkCardData.skills}</div>
      </div>
    </div>
  )
}

export default WorkCard
