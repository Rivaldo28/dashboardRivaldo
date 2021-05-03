import React from 'react';
import '../assets/css/GeoLocation.css';
import 'fontsource-roboto';

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    }
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    } else {
      alert("Geolocation não suporta este Browser");
    }
  }
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }
  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("O usuário negou a solicitação de geolocalização.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("As informações de localização não estão disponíveis.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("A solicitação para obter a localização do usuário expirou.")
        break;
      default:
        alert("An unknown error occurred.")
    }
  }
  render() {
    return (
      <div className="GeoLocation">
        <h2>Localizando o Úsuario</h2>
        <button onClick={this.getLocation}>Coodernadas</button>
        <h4>Coodernadas da Localização do Úsuario</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Google Maps Geográfico</h4>
        <p>Endereço: {this.state.userAdress}</p>
        {
          this.state.latitude && this.state.longitude ?
            <img src={'https://googleapis.com/maps/api/?center=$(this.state.latitude),$(this.state.longitude)&zoom=14&size=14&size=400x300&sensor=false&markers=color:red%7C$(this.state.latitude),$(this.state.longitude)&key=$AIzaSyDYC8dGRZELsvocFf1DQiOfADWRE9XjDNM)'} alt='' />
            :
            null
        }
      </div>

    );
  }
}
export default GeoLocation;