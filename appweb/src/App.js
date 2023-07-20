// import logo from './logo.svg';
import './App.css';
import Menu from './content/1_menu';
import Content from './content/2_content';
import Footer from './content/3_footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Content/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
