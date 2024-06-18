import '../ImgProject.css'
const ImgProject = props => {
  return (
    <div className='imgProject'>
      <div className='heading'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ImgProject
