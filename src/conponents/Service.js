import React, { useState } from 'react';
import Card from './Card';
import data from './data';

const Service = () => {
  const [sdata, setSdata] = useState(data);
  return (
    <>
      <div className='Service'>
        <div className='container'>
          <h2 className='text-center'>Our Services</h2>
            <div className='row text-center mt-3 gy-5'>
               {
                sdata.map((ele) => {
                  // console.log(ele)
                return(
                  <Card
                  key = {ele.id}
                  name = {ele.name}
                  passion = {ele.passion}
                  details = {ele.details}
                  img = {ele.profile}
                  />
                )
                })
               }
            </div>
        </div>
      </div>
    </>
  )
}

export default Service;
