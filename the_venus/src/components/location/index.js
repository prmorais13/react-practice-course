import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.6113966311905!2d-35.278084485880534!3d-5.947624595691655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b259dc721c2349%3A0x8d573806d3348aa6!2sR.+Parque+Para%C3%BAna%2C+79+-+Nova+Esperan%C3%A7a%2C+Parnamirim+-+RN%2C+59140-971!5e1!3m2!1spt-BR!2sbr!4v1543414116371"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
