import React from 'react';

const FooterInfo = ({infotitulo, informacao}) => {

    return (
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">{infotitulo}</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '2px' }} />
            <p>
                <a href="#!" className="text-white">{informacao}</a>
            </p>
        </div>


    );

}
export default FooterInfo