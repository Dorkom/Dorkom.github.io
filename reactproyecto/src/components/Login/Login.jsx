import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import React from 'react';

const Login = () => {

return (
    <div >
        <section className='form-register'>
            <h4 className='login-title'>LOG IN.</h4>
            <p className='login-details'>Log in with your details below to view your order</p>

            <input className='controls' type='email' name="nombre" id="nombres"
                placeholder='Email' />

            <input className='controls' type='password' name="nombre" id="nombres"
                placeholder='Password' />

            <input className='botons' type='submit' value='LOGIN' />


            <p className='forge'> <a href='#'>Forget your password? </a> </p>


            <p className='donthave'>Dont have an account?</p>

            {/* <input  href='checkout' className='botons' type='submit' value='SIGN UP'/> */}
            <Button className='boton-signup' variant="outline-sucess" href="crear">SIGN UP</Button>
        </section>

    </div>
)
}

export default Login;