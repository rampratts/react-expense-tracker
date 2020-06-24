import React from 'react';
import './ItemList.css'

function ItemList(props) {
    return (
        <ul>
            {props.items.map(i => 
                <li key={i.id} className={`container ${i.type === 'expense' ? 'expense' : 'income'}`}>
                    <div className='description'>
                        {i.description}
                    </div>
                    <div className='value'>
                        {i.value} 
                        <i onClick={e => props.deleteMyItem(i.id)} id='delete-button' class="fas fa-trash-alt"></i>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default ItemList;