import React from 'react';

const Contact = ({contactTitle, contactValue}) => {

    return(
      <p>
       {`${contactTitle}:`}<a href={contactValue}>{contactValue}</a>
      </p>
    );
  }

export default Contact;