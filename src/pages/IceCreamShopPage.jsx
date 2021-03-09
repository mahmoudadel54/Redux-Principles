import HooksIceCreamContainer from "../components/IceCream/HooksIceCreamContainer";
import IceCreamContainer from "../components/IceCream/IceCreamContainer";

function IceCreamShopPage() {
  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        margin: "auto",
      }}
    >
      <HooksIceCreamContainer />
      <IceCreamContainer />
    </div>
  );
}

export default IceCreamShopPage;
