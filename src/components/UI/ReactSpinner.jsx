import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from 'react-loader-spinner'
import React from 'react'

const ReactSpinner = () => {
    return (
        <Loader 
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
}

export default ReactSpinner;
