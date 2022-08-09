import React from 'react';


const Home = () => {
  return (
    <>
      <header>
        <section className='container gx-0 hero_section'>
          <div className='left'>
            <h1>hello i'm a web developer</h1>
            <p className='hero_para'>
              I'm create and maintain websites. I'm also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. </p>
            <button className='btn-style2'>read more</button>
          </div>
          <div className='right'>
            <img src='../img/hero.png' alt='img'></img>
          </div>
        </section>
      </header>
    </>
  )
}

export default Home
