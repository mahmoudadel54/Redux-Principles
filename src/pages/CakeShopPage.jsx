import CakeContainer from "../components/cake/CakeContainer";
import HooksCakeContainer from "../components/cake/HooksCakeContainer";

function CakeShopPage() {
  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        margin: "auto",
      }}
    >
      <HooksCakeContainer />
      <CakeContainer />
    </div>
  );
}

export default CakeShopPage;
