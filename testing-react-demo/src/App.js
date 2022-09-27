import Header from "./component/Header/Header";
import './App.scss'
import Headline from "./component/Headline/Headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
      <Headline header="Posts" desc="Click the button to render Posts"/>
      </section>
     
    </div>
  );
}

export default App;
