// Styled Components
import { Container, ButtonWrapper } from "./StyledComponents";
import { ChoiceButton } from "../../Components/StyledComponents/Common";

// Components
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Hooks
import { useState } from "react";
import { useSelector } from "react-redux";

// Types of Weather Layers
const types = {
  1: "precipitation_new",
  2: "clouds_new",
  3: "pressure_new",
  4: "wind_new",
  5: "temp_new",
};

const WeatherMap = () => {
  const [view, setView] = useState("5");
  const {
    coord: { lat, lon },
    name,
  } = useSelector((state) => state.weather.current);

  const changeView = (e) => {
    setView(e.target.dataset.type);
    console.log(e.target.dataset.type);
  };

  return (
    <Container>
      <ButtonWrapper>
        <ChoiceButton type="button" onClick={changeView} className="" data-type="1" disabled={view === "1"}>
          Precipitation
        </ChoiceButton>
        <ChoiceButton type="button" onClick={changeView} className="" data-type="2" disabled={view === "2"}>
          Clouds
        </ChoiceButton>
        <ChoiceButton type="button" onClick={changeView} className="" data-type="3" disabled={view === "3"}>
          Pressure
        </ChoiceButton>
        <ChoiceButton type="button" onClick={changeView} className="" data-type="4" disabled={view === "4"}>
          Wind
        </ChoiceButton>
        <ChoiceButton type="button" onClick={changeView} className="" data-type="5" disabled={view === "5"}>
          Temp
        </ChoiceButton>
      </ButtonWrapper>

      <div>
        <MapContainer zoom={10} center={[lat, lon]}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {view === "1" && <TileLayer url={`/api/v1/weather/map/${types[view]}/{z}/{x}/{y}`} />}
          {view === "2" && <TileLayer url={`/api/v1/weather/map/${types[view]}/{z}/{x}/{y}`} />}
          {view === "3" && <TileLayer url={`/api/v1/weather/map/${types[view]}/{z}/{x}/{y}`} />}
          {view === "4" && <TileLayer url={`/api/v1/weather/map/${types[view]}/{z}/{x}/{y}`} />}
          {view === "5" && <TileLayer url={`/api/v1/weather/map/${types[view]}/{z}/{x}/{y}`} />}

          <Marker position={[lat, lon]}>
            <Popup>Current Location: {name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </Container>
  );
};

export default WeatherMap;
