import React from 'react';
import '../../App.css';
import {Redirect} from 'react-router-dom';

export default function LogOut() {
  return <Redirect to ="/Login"/>;;
}