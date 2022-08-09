import React, { useState } from 'react';
import Languagecard from './Languagecard';
import ldata from './languagedata';

const Language = () => {
    const [newData, setNewData] = useState(ldata);
    return (
        <>
            <section className='language pt-5'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='text-center' data-aos="fade-up">Language Used</h1>
                        {
                            newData.map((ele) => {
                                return(
                                    <Languagecard
                                    key = {ele.id}
                                    name = {ele.name}
                                    details = {ele.detail}
                                    logo = {ele.logo}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Language;
