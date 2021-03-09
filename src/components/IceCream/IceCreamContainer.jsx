import { useState } from "react";
import { connect } from "react-redux";
import {
  buyIceCream,
  backIceCream,
} from "../../redux/iceCream/actions/IceCreamActions";

const IceCreamContainer = (props) => {
  const { noOfIceCream, buyIceCream, backIceCream } = props;
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className="container text-center mt-5">
        <span
          style={{
            marginBottom: "2vh",
            width: "fit-content",
            border: "solid",
            borderRadius: "2em",
            padding: "0 1em",
            wordWrap: "break-word",
          }}
        >
          Using mapStateToProps, mapDispatchToProps with connect{" "}
        </span>
        <h2>Ice Cream Shop</h2>
        {noOfIceCream > 1 ? (
          <>
            <h4>No of available Ice Cream: {noOfIceCream}</h4>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => buyIceCream(number)}>
              Buy {number} Ice Cream
            </button>
            <button onClick={backIceCream}>Back IceCreamContainer</button>
          </>
        ) : (
          <>
            <h2>No ice cream pieces remaining. It is empty now</h2>
          </>
        )}
      </div>
    </>
  );
};

//step no. 1
const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.icecream.noOfIceCream,
  };
};
//step no. 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => {
      dispatch(buyIceCream(number));
    },
    backIceCream: () => {
      dispatch(backIceCream());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
