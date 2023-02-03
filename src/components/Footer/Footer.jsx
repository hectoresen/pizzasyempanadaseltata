import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='bg-light text-center text-white'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='https://www.facebook.com/people/Pizzas-y-Empanadas-El-Tata/100066526252267/'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

{/*                     <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn> */}

{/*                     <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='google' />
                    </MDBBtn> */}
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='https://www.instagram.com/eltatapizzasyempanadas/?igshid=YmMyMTA2M2Y%3D'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(49, 49, 40, 1)' }}>
                © 2023 Todos los derechos reservados&nbsp;-&nbsp;
                <a className='text-white' href='https://hectorescolanteenriquez.com/'>
                    Hector Escolante Enriquez
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footer