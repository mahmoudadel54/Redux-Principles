/*What is required??: here I want to display some data from state not all state data
But using selectors in redux not connect, mapStateToProps
So we will use here useSelector to hold data from state and the same to hold dispatchs 
use -> useDispatch
*/
import { useSelector, useDispatch } from "react-redux";
import {
  buyIceCream,
  backIceCream,
} from "../../redux/iceCream/actions/IceCreamActions";

function HooksIceCreamContainer() {
  // to hold state -> useSelector
  const noOfIceCream = useSelector((state) => state.icecream.noOfIceCream);
  // to hold dispatchs -> useDispatch
  const dispatch = useDispatch();
  return (
    <div className="container text-center mt-5">
      <span
        style={{
          marginBottom: "2vh",
          border: "solid",
          borderRadius: "2em",
          padding: "0 1em",
        }}
      >
        Using Redux Hooks
      </span>

      <h2>Ice Cream Shop</h2>
      <h4>No of available ice cream: {noOfIceCream}</h4>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      <button onClick={() => dispatch(backIceCream())}>Back Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
