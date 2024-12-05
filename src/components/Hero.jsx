import "./Hero.css"

function Hero () {
  return(
    <section className="hero">
      <img className="img-ppal" src="/src/assets/nasagif10.gif"></img>
      <div className="content">
      <h2>Welcome to Nasa Pio</h2>
      <p>
        A place for astronomy lovers
      </p>
      </div>
    </section>
  )
}

export default Hero;