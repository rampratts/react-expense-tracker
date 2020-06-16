import React from 'react';

function ItemList(props) {
    return (
        <ul>
            {props.items.map(i => 
                <li key={i.id}>{i.description} - {i.value} <button onClick={e => props.deleteMyItem(i.id)}>X</button></li>
            )}
        </ul>
    );
}

export default ItemList;