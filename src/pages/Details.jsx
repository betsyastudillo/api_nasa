import '../App.css';

function details({detail}) {
  return (
    <div className='details'>
      <h1>{detail.title}</h1>
      <p>{detail.explanation}</p>
      <img src={detail.hdurl}/>
    </div>
  )
}

export default details