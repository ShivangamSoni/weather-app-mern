// Styled Components
import { Container } from "./StyledComponents";
import { SectionTitle, ChoiceButton } from "../StyledComponents/Common";

// Hooks
import { useDispatch, useSelector } from "react-redux";

// Action Creators
import { changeTempUnit } from "../../Redux/Weather/ActionCreator";

const TempConvertor = () => {
  const dispatch = useDispatch();
  const { tempUnit } = useSelector((state) => state.weather);

  const changeUnit = (e) => {
    dispatch(changeTempUnit(e.target.dataset.unit));
  };

  return (
    <div>
      <SectionTitle>Select Temperature Unit</SectionTitle>
      <Container>
        <ChoiceButton type="button" onClick={changeUnit} data-unit="c" disabled={tempUnit === "c"}>
          Celsius
        </ChoiceButton>
        <ChoiceButton type="button" onClick={changeUnit} data-unit="f" disabled={tempUnit === "f"}>
          Fahrenheit
        </ChoiceButton>
      </Container>
    </div>
  );
};

export default TempConvertor;
