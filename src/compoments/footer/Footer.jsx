import React from 'react';
import './Footer.css'
import logoFooter from '../../assets/logo-footer.svg'
import FooterInfo from './FooterInfo';



const Footer = () => {

    return(

        <footer className="text-center text-lg-start text-white text-sm" style={{ backgroundColor: 'black' }}>
        <section className="justify-content-left p-1" style={{ backgroundColor: 'black' }}>

        </section>
    
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold"><img src= {logoFooter} alt="Logo" className="d-inline-block align-text-top logo-width"/></h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '1px' }} />
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </p>

                        <a href="https://web.facebook.com/digitalcollegebr/?_rdc=1&_rdr"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/digitalcollegebr/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2Feaicollegers"><i className="fa-brands fa-twitter"></i></a>
                        
                    </div>
    
                    <FooterInfo infotitulo={"Informações"} informacoes={["Sobre Drip Store","Segurança","Wishlist","Blog","Trabalhe conosco","Meus pedidos"]}/>
                    <FooterInfo infotitulo={"Categoria"} informacoes={["Camisetas","Calças","Bonés","Headphones","Tênis"]}/>
                    <FooterInfo infotitulo={"Contatos"} informacoes={["Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", "(85) 3051-3411"]}/>
                    
                </div>
            </div>
        </section>
    
        <div className="text-center p-3" style={{ backgroundColor: 'black'}}>
        <hr className="mb-4 mt-0 d-block mx-auto" style={{ width: '85%', backgroundColor: 'gray', height: '1px' }} />
            © 2024 Copyright - Digital College.
        </div>
    </footer>
    );

}
export default Footer