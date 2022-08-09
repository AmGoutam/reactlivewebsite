import React from 'react';


const Languagecard = (props) => {
    return (
        <>
            <div className='col text-center' data-aos="fade-up" >
                <span><i className={`${props.logo}`}></i></span>
                <h4>{props.name}</h4>
                <p className='hero_para'>{props.details}</p>
            </div>
        </>
    )
}

export default Languagecard;
