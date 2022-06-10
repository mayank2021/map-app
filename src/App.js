import "./App.css";
import Nav from "./Components/Nav/Nav";
import WrappedMap from "./Components/Map/Map";
import Usage from "./Components/Usage/Usage";

function App() {
  return (
    <div>
      <Nav />
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA8M9M8_YVMI_y243kraXRzh67Pl7dPizA`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Usage />
    </div>
  );
}

export default App;
