import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {
    render() {
        return (
            <form id="form" onSubmit = {this.props.weatherMethod}> 
                <input  type="text" name="city" placeholder="City"/>
                <button variant="primary" className="bt">Update</button>
            </form>
        );
    }
}

export default Form;