import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
function Home(props) {
  useEffect(() => {
    // console.log(props);
    // props.setItem({ name: "isLogin", value: true });
  }, [props]);
  return (
    <div>
      {props.isLogin ? "Yes" : "No"}
      <p>Hello Home Here</p>
      <button
        onClick={() => {
          props.setItem({ name: "isLogin", value: true });
        }}
      >
        Test
      </button>
    </div>
  );
}
export default connect(reduxState, reduxDispatch)(Home);
