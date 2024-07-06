import React from 'react';

const Helmemt = (props) => {
    document.title = 'Maltimart -' + props.title
    return (
        <div className='w-100'>
           {props.children}
        </div>
    );
}

export default Helmemt;
