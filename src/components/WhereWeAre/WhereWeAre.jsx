import React from 'react';
import './WhereWeAre.scss';

const WhereWeAre = () => {
    return (
        <div className='whereweare' id='whereweare'>
            <hr></hr>
            ¿Dónde estamos?
            <div className='whereweare__map'>
                <iframe className="whereweare__map-frame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=504&amp;height=361&amp;hl=en&amp;q=Avenida%20de%20A%20Coru%C3%B1a,%2014%20Lugo+(Pizzas%20y%20empanadas%20El%20Tata)&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    )
}

export default WhereWeAre;