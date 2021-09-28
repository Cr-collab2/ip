import { Fragment } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globa";

function App() {
  return (
   <Fragment>
     <Header/>
     < Content/>
      <GlobalStyle/>
   </Fragment>
  );
}

export default App;
