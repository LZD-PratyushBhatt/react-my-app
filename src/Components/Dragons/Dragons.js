import Dragon from "./Dragon/Dragon";

const Dragons = (props) =>
  props.dragons.map((variation, variationIndex) => {
    return (
      <Dragon
        name={variation.name}
        time={variation.time}
        clickPass={() => props.clicked(variationIndex)}
        nameChange={(event) => props.changed(event, variation.id)}
        key={variation.id}
      />
    );
  });
export default Dragons;
