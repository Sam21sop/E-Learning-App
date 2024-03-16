import React from 'react'
import { errorToastBox } from './errorToastStyle';

function ErrorTaost(props) {

    const  {error} = props;
    
    return (
        <div className={errorToastBox}>
            {error}
        </div>
    )
}

export default ErrorTaost;