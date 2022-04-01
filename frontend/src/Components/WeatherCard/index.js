// Styled Components
import { Container, Toggle, Info, Field, Icon, Image } from "./StyledComponents";

// Hooks
import { useState } from "react";
import { useSelector } from "react-redux";

// Utility Function to Convert Temperature from C to F
import { toFahrenheit } from "../../Utils/TempConvertor";

const WeatherCard = ({ horizontal, data }) => {
  const { tempUnit } = useSelector((state) => state.weather);

  // Show Alt used for Toggling Between Details
  const [showAlt, setShowAlt] = useState(false);
  const toggleView = (e) => {
    setShowAlt((prev) => !prev);
  };

  // Current & Weekly Data are stored in different Formats. Hence, values need to accessed differently
  const curTemp = data.main?.temp || data.temp?.day;
  const feelsLike = data.main?.feels_like || data.feels_like?.day;
  const minTemp = data.main?.temp_min || data.temp?.min;
  const maxTemp = data.main?.temp_max || data.temp?.max;

  return (
    <Container horizontal={horizontal}>
      <Toggle onClick={toggleView} className={showAlt && "active"} />
      <Info>
        {!horizontal && <Field>{new Date(data.dt * 1000).toLocaleString()}</Field>}
        {!showAlt ? (
          <>
            <Field>
              Current: {tempUnit === "c" ? curTemp : toFahrenheit(curTemp)} &deg;{tempUnit.toUpperCase()}
            </Field>
            <Field>
              Feels-Like: {tempUnit === "c" ? feelsLike : toFahrenheit(curTemp)} &deg;{tempUnit.toUpperCase()}
            </Field>
            <Field>
              Condition: {data.weather[0]?.main} ({data.weather[0]?.description})
            </Field>
            <Field>
              Min: {tempUnit === "c" ? minTemp : toFahrenheit(curTemp)} &deg;{tempUnit.toUpperCase()}
            </Field>
            <Field>
              Max: {tempUnit === "c" ? maxTemp : toFahrenheit(curTemp)} &deg;{tempUnit.toUpperCase()}
            </Field>
          </>
        ) : (
          <>
            <Field>Wind Speed: {data.wind?.speed || data.wind_speed} m/s</Field>
            <Field>Humidity: {data.main?.humidity || data.humidity}%</Field>
            <Field>Pressure: {data.main?.pressure || data.pressure} hPa</Field>
            <Field>Sunrise: {new Date((data.sys?.sunrise || data.sunrise) * 1000).toLocaleTimeString()}</Field>
            <Field>Sunset: {new Date((data.sys?.sunset || data.sunset) * 1000).toLocaleTimeString()}</Field>
          </>
        )}
      </Info>

      <Icon>
        <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
      </Icon>
    </Container>
  );
};

export default WeatherCard;
