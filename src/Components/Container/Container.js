import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./Container.css";

// const Container = () => (
//   <ReactCSSTransitionGroup
//     transitionName="transitionWrapper"
//     component="div"
//     className={style.transitionWrapper}
//     transitionEnterTimeout={300}
//     transitionLeaveTimeout={300}>
//     <div key={this.props.location.pathname}
//       style={{ position: "absolute", width: "100%" }}>
//       {
//         this.props.children
//       }
//     </div>
//   </ReactCSSTransitionGroup>
// );

// export default Container;

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
<ReactCSSTransitionGroup
    transitionName="transitionWrapper"
    component="div"
    className={style.transitionWrapper}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}>
    <div key={this.props.location.pathname}
      style={{ position: "absolute", background:"blue", width: "100%"}}>
      {
        this.props.children
      }
    </div>
  </ReactCSSTransitionGroup>
    );
  }
}

export default Container;