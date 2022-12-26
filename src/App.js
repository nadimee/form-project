import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
<div className="wrapper">
  <div className="inner">
    
    <form action="">
    <div className="title">
      <h3 className="contact">Contact Us</h3>
      <p>If you want to join us and become a javascript developer please fill the next form.</p>
      </div>
      <label className="form-group">
        <input type="text" className="form-control"  required/>
        <span>Your Name</span>
        <span className="border"></span>
      </label>
      <label className="form-group">
        <input type="text" className="form-control"  required/>
        <span htmlFor="">Your Mail</span>
        <span className="border"></span>
      </label>
      <label className="form-group" >
        <textarea name="" id="" className="form-control" required></textarea>
        <span htmlFor="">Your Message</span>
        <span className="border"></span>
      </label>
      <button>Submit 
        <i className="zmdi zmdi-arrow-right"></i>
      </button>
    </form>
  </div>
</div>
    </div>
  );
}

export default App;
