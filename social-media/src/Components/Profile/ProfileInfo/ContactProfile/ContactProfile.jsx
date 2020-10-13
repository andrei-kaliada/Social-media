import React from 'react';

const Contact = ({contactTitle, contactValue}) => {

    return(
      <p>
        {`${contactTitle}:${contactValue}`}
      </p>
    );
  }

export default Contact;