import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DeviceItem from './DeviceItem';

function Devices() {
    const devices = useSelector(({devices}) => devices.devices)

  return<div className="col-s9">
    {devices&&
        devices.map(obj => (
            <DeviceItem key={obj.id} obj={obj}/>
        ))
    }
    </div>;
}

export default Devices;
