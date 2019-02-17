import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/page-two" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

const PageOne = () => {
   return (<div>Page One
       <Link to="/page-two" >Page Two </Link>
   </div>);
}

const PageTwo = () => {
    return <div>Page Two <Link to="/" >Page One </Link></div>
}

export default App;