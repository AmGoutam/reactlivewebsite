import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        number: '',
        address: '',
        msg: ''
    });




    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preValue) => {
            // console.log(preValue)
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    const onsubmit = (e) => {
        console.log('click')
        e.preventDefault();
        alert(`My name is ${data.fname} ${data.lname}. My email is ${data.email}. My phone number is ${data.number}. My address is ${data.address}. Here is what i want to say ${data.msg}.`)
    }

    return (
        <>

            <section className='contact'>
                <h1 className='text-center' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">Contact Us</h1>
                <div className='container mt-4 mb-5'>
                    <div className='left1 contact_img_part' data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom">
                        <h4>Contact With Me</h4>
                        <p className='hero_para'>Some quick example text to build on the card title and make up the bulk of the card</p>
                        <img src='../img/contact.jpg' alt='contactimg'></img>
                    </div>
                    <div className='left1'>
                        <div className='container h-100  d-flex justify-content-center'>
                            <form data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" onSubmit={onsubmit}>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <input onChange={inputEvent} type='text' className='form-control' placeholder='Frist Name' name='fname' value={data.fname} />
                                    </div>
                                    <div className='col'>
                                        <input onChange={inputEvent} type='text' className='form-control' placeholder='Last Name' name='lname' value={data.lname} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <input onChange={inputEvent} type='email' className='form-control' placeholder='Enter Your Email' name='email' value={data.email} />
                                    </div>
                                    <div className='col'>
                                        <input onChange={inputEvent} type='number' className='form-control' placeholder='Enter Your Number' name='number' value={data.number} />
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <input onChange={inputEvent} type='text' className='form-control' placeholder='Enter Your Address' name='address' value={data.address} />
                                </div>
                                <div className='mb-4'>
                                    <textarea onChange={inputEvent} className="form-control textarea" name="msg" value={data.msg} rows="5"></textarea>
                                </div>
                                <button type='submit' className='btn-style2 w-100'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
