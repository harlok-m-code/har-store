import React, { useEffect } from 'react';
import Category from './Category';
import './css/main.css'
import Devices from './Devices';
import { loadDevices } from '../store/acions/devices'
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Main() {

  const dispatch = useDispatch();

  const loadDevice = async () => {
    await axios.get('http://localhost:5000/device').
    then((data) => dispatch(loadDevices(data.data)))
  }

  useEffect(() => {
    loadDevice()
  },[])

  return <div className="row-1">
            <Category/>
            <Devices useDevices={loadDevice} />
        </div>
}

export default Main;
