import React from 'react';

const Card = (props) => {
    return (
        <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="card p-4" style={{ width: "30rem" }} >
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <h6 className="card-title">{props.passion}</h6>
                    <p className="card-text hero_para fs-4">{props.details}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
