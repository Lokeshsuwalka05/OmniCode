import "./index.scss";
import { Rightcontainer } from "./Rightcontainer";

export const HomeScreen = () => {
  return (

    <div className="home-container">
      <div className="left-container">
        <div className="items-container">
          <img src="logo.png"></img>
          <h1>Omni Code</h1>
          <h2>Code. Compile. Debug.</h2>
          <button>
            <span className="material-icons">
              add
            </span>
            <span>Create playground</span>
          </button>

        </div>
      </div>
      <Rightcontainer/>
    </div>




  );

}