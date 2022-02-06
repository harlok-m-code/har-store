import React, { useEffect, useState } from 'react';

function DeviceItem({obj}) {
    
  console.log(obj)
  return <div className="product">
                <h5>{obj.name}</h5>
                <img className='img' src={obj.img} alt="image" />
                <p className='price'>{obj.price} &#8381;</p>
                <button className='buy'>Купить</button>
            </div>
}

export default DeviceItem;
