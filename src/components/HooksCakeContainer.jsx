/*What is required??: here I want to display some data from state not all state data
But using selectors in redux not connect, mapStateToProps
So we will use here useSelector to hold data from state and the same to hold dispatchs 
use -> useDispatch
*/

import { useSelector, useDispatch } from "react-redux";
import { backCake, buyCake } from "../redux/cakes/actions/BuyCakeAction";

function HooksCakeContainer() {
  // to hold state -> useSelector
  const noOfCakes = useSelector((state) => state.noOfCakes);
  // to hold dispatchs -> useDispatch
  const dispatch = useDispatch();
  return (
    <div className="container text-center mt-5">
      <h2>Cake Shop</h2>
      <h4>No of available cakes: {noOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(backCake())}>Back Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
