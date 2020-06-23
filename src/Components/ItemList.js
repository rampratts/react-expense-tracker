import React from 'react';
import './ItemList.css'

function ItemList(props) {
    return (
        <ul>
            {props.items.map(i => 
                <li key={i.id} className='container'>
                    <div className='description'>
                        {i.description}
                    </div>
                    <div className='value'>
                        {i.value} 
                        <button onClick={e => props.deleteMyItem(i.id)}>X</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default ItemList;