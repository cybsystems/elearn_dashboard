import React, { Component } from 'react'
import {   ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToastComponent extends Component {
    render() {
        return (
          <div>
            <ToastContainer closeOnClick={false} positio="nbottom-right" />
          </div>
        );
    }
}
