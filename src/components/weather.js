import React from "react";


class Weather extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                {this.props.city &&
                    <div className="text"> 
                        <p>Location: {this.props.city}, {this.props.country}</p>
                        <p>Temperature: {this.props.temp}</p>
                        <p>Pressure: {this.props.pressure}</p>
                        <p>Sunset: {this.props.sunset}</p>
                    </div>
                }
                <p className="error">{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;