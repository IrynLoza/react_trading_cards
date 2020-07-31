"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h4>Hello dear user!</h4>
      <a href="/cards">Click here to go to the cards</a>
      <br></br>
      <br></br>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));



