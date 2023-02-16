// import React, { Component } from "react";

// class ConditionalApp extends Component {
//   constructor() {
//     super();
//     this.state = { isLoggedIn: false };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn,
//       };
//     });
//     return (
//       <div>
//         <button>Log out</button>
//       </div>
//     );
//   }

//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log out" : "Log in";
//     let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";
//     return (
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{displayText}</h1>
//       </div>
//     );
//   }
// }
// export default ConditionalApp;
