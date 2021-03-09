//What is required??: here I want to display some data from state not all state data
//it will be via 3 steps:
/*1- create a function named : mapStateToProps -> that takes state as a parameter 
and returns the part data you want from state  
2- Create a function named mapDispatchToProps 
to enable me to fire action in the components (Access action of the store)
3- import connect function (higher order component) from react-redux that 
takes (mapStateToProps, mapDispatchToProps) as params
and return the component after passing the required data and dispatchs to its props 
*/

import { connect } from "react-redux";
import { backCake, buyCake } from "../redux/cakes/actions/BuyCakeAction";

const CakeContainer = (props) => {
  const { noOfCakes, buyCake, backCake } = props;
  console.log(props);
  return (
    <>
      <div>
        <h2>Cake Shop</h2>
        <h4>No of available cakes: {noOfCakes}</h4>
        <button onClick={buyCake}>Buy Cake</button>
        <button onClick={backCake}>Back Cake</button>
      </div>
    </>
  );
};

//step no. 1
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};
//step no. 2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
    backCake: () => {
      dispatch(backCake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
