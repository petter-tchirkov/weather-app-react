import React from 'react'
import App from '../App'
import '../css/form.css'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="Enter your city" />
                <button>Get Weather</button>
            </form>
        );
    }
}
export default Form