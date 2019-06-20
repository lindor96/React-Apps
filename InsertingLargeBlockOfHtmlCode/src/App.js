import React from 'react';

class App extends React.Component{

  render(){
    //  If you are returning multiple lines of html code,
    //  put them inside the parentheses of your variable
    const myelement = (
      <div>
         <div>
       <h1>Header 1 of div 1</h1>
       <h2>Header 2 of div 1</h2>
       <h3>Header 3 of div 1</h3>
       <h4>Header 4 of div 1</h4>
       <h5>Header 5 of div 1</h5>
       <h6>Header 6 of div 1</h6>
     </div>
      <div>
      <h1>Header 1 of div 2</h1>
      <h2>Header 2 of div 2</h2>
      <h3>Header 3 of div 2</h3>
      <h4>Header 4 of div 2</h4>
      <h5>Header 5 of div 2</h5>
      <h6>Header 6 of div 2</h6>
    </div>
      </div>
    );
    return myelement;
  }
}

export default App;
