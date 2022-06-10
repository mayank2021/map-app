import { useState } from "react";
import color1 from "../../Media/color1.png";
import color2 from "../../Media/color2.png";
import color3 from "../../Media/color3.png";
import color4 from "../../Media/color4.png";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { data } from "../../Data/Data";

const Map = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <GoogleMap
      defaultZoom={2}
      defaultCenter={{ lat: 20.593683, lng: 78.962883 }}
    >
      {data.map((ele) => {
        let iconSize =
          ele.usage > 5000
            ? 30
            : ele.usage > 1000 && ele.usage < 5000
            ? 25
            : ele.usage > 1000 && ele.usage < 500
            ? 20
            : 15;
        return (
          <Marker
            key={ele.id}
            position={{ lat: ele.lat, lng: ele.lng }}
            onClick={() => {
              setSelectedItem(ele);
            }}
            icon={{
              url: `${
                ele.usage > 5000
                  ? color1
                  : ele.usage > 1000 && ele.usage < 5000
                  ? color2
                  : ele.usage > 1000 && ele.usage < 500
                  ? color3
                  : color4
              }`,
              scaledSize: new window.google.maps.Size(iconSize, iconSize),
            }}
          />
        );
      })}
      {selectedItem && (
        <InfoWindow
          position={{ lat: selectedItem.lat, lng: selectedItem.lng }}
          onCloseClick={() => setSelectedItem(null)}
        >
          <>
            <h3>Region:{selectedItem.region}</h3>
            <h4>Data Usage:{selectedItem.usage}</h4>
          </>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
