import React from 'react';

const About = () => {
  return (
    <>
      <section className='aboutus'>
        <h1 className='text-center pb-5'>About Us</h1>
        <div className='container'>
          <div className='box'>
            <img src='./img/html.jpg' alt='htmlimg' data-aos="fade-up-right" />
          </div>
          <div className='box'>
            <p className='hero_para hero_para_new' data-aos="fade-up-left">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
            </p>
            <div className='text-start w-100 btn-container'><button className='btn-style2' data-aos="fade-left">Read More</button></div>
          </div>
        </div>
        <div className='container second_container'>
          <div className='box box_2'>
            <p className='hero_para hero_para_new hero_para_new2' data-aos="fade-up-right">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
            </p>
            <div className='text-start w-100 btn-container'><button className='btn-style2' data-aos="fade-right">Read More</button></div>
          </div>
          <div className='box box2'>
            <img src='./img/css.jpg' alt='cssimg' data-aos="fade-up-left" />
          </div>
        </div>
        <div className='container third_container'>
          <div className='box new-img-container'>
            <img src='./img/react.jpg' alt='reactimg' data-aos="fade-up-right"/>
          </div>
          <div className='box'>
            <p className='hero_para hero_para_new' data-aos="fade-up-left">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
            </p>
            <div className='text-start w-100 btn-container'><button className='btn-style2' data-aos="fade-left">Read More</button></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
