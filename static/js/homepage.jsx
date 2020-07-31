"use strict";

function Homepage() {
  return (
    <div>
      <h4>Hello dear user!</h4>
      <a href="/cards">Click here to go to the cards</a>
      <br></br>
      <br></br>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));



