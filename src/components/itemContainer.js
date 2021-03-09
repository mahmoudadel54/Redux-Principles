import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/actions/BuyCakeAction";
import { buyIceCream } from "../redux/iceCream/actions/IceCreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>
        No. of {props.shopType} Items - {props.item}
      </h2>
      <button onClick={props.buyItem}>But {props.shopType} item</button>
    </div>
  );
}

//the new trick here -> accesing the component props in mapStateToProps and retrieve some data from it
//so mapStateToProps can take 2nd paramerter --> ownProps
const mapStateToProps = (state, ownProps) => {
  let item = ownProps.cake ? state.cake.noOfCakes : state.icecream.noOfIceCream;
  return {
    item: item,
    shopType: ownProps.cake ? "Cake" : "Ice Cream",
  };
};

// and the same with mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

/*
in case of wanting use dispatch only -- > put null as first parameter 
export default connect(null, mapDispatchToProps)(ItemContainer);
*/
