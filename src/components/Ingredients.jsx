import React, { useState } from 'react';

const Ingredients = (props) => {
    console.log(props)
    let myIngrid
    // const [ingrid, setIngrid] = useState('')
    switch (props.meal) {
        case 'plov':
            // setIngrid('Rice')
            myIngrid = (
                <div>
                    <h3>{props.meal}</h3>
                    <p>Rice, carrot, onion, pepper</p>
                </div>
            )
            break;
        case 'manty':
            myIngrid = (
                <div>
                    <h3>{props.meal}</h3>
                    <p>Testo, meet, onion, potato, pepper, salt.</p>
                </div>
            )
            // setIngrid('Testo, myaso, kartoshko')
            break;
        case 'borsh':
            myIngrid = (
                <div>
                    <h3>{props.meal}</h3>
                    <p>Kapusta, meet, onion, pepper, currot, potato.</p>
                </div>
            )
            // setIngrid('Kapust, myaso, kartoshko')
            break;
        default:
            break;
    }
    return (
        <div>
            {myIngrid}
        </div>
    );
};

export default Ingredients;