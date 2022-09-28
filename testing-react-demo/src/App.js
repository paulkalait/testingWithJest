import Header from "./component/Header/Header";
import './App.scss'
import Headline from "./component/Headline/Headline";


const tempArr = [{
  fName: "Joe",
  lName: "Bloggs",
  email: "at@gmail.com",
  age: 24,
  online: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
      <Headline header="post" desc="Click the button to render Posts" tempArr={tempArr} />
      </section>
     
    </div>
  );
}

export default App;
