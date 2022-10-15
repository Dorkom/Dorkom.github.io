import React from 'react'

const Crear = () => {

    return (
        <div >
            

            <section className='form-register'>
            <h4>CREATE ACCOUNT</h4>
                <input className='controls' type='text' name="nombre" id="nombres"
                    placeholder='First Name' />

                <input className='controls' type='text' name="nombre" id="nombres"
                    placeholder='Last Name' />

                <input className='controls' type='email' name="nombre" id="nombres"
                    placeholder='Email' />

                <input className='controls' type='password' name="nombre" id="nombres"
                    placeholder='Password' />


                <input className='botons' type='submit' value='CREATE'/>


            </section>

        </div>
    )
    }

export default Crear;