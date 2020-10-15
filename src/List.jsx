import React from 'react';
const List =({item, title})=>{

//if(item.length !== 0){
    if(title === "Border Countries:"){
 return (
        <div>{title}
            <ul className='ul-element'>
                {item.map(it => 
                    <li className='li-element'>{it}</li>)}
            </ul>
        </div>
    );

    }else{
    return (
        <div>{title}
            <ul className='ul-element'>
                {item.map(it => 
                <li className='li-element'>{it.name}</li>)}
            </ul>
        </div>
    );}
//};
};
export default List;