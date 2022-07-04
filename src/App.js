import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Collapse,  } from "react-bootstrap";
function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 '>
        <div className='container'>
          <a href='#' className='navbar-brand'>Front end bootcamp</a>
          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-expanded="false" aria-controls="collapseExample">
            <span className=' navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className=' navbar-nav ms-auto'>
              <li className=' nav-item'>
                <a  href='#learn' className=' nav-link'>Login</a>
              </li>
              <li>  
                <a href='#questions' className=' nav-link'>Questions</a>
              </li> 
              <li> 
                <a href='#instrucktors' className=' nav-link'>Instracktors</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className=' bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start'>
        <div className=' container'>
          <div className=' d-sm-flex aligh-items-center justify-content-between'>
            <div>
              <h1>Become a <span className=' text-warning'> web developer</span></h1>
              <p className=' lead my-4'>As a hobby I decided to learn programming. Have started with HTML, CSS, basic JavaScript. (Not sure that is “programming”, or the feeling of completing a cross word puzzle.) Regardless you are a talented teacher! You have a humble quality that translates to encouragement— and anyone can learn how to do this. You are the Richard Feynman of learning front end development. Thank you!</p>
              <button className=' btn btn-primary btn-lg'>start</button>
            </div>
            <img className=' img-fluid w-50 d-none d-lg-block' src='https://www.lunapic.com/editor/premade/transparent.gif'></img>
          </div>
        </div>
      </section>

      <section className=' bg-primary text-light p-5'>
        <div className=' container'>
          <div className=' d-md-flex justify-content-between aligh-items-center'>
            <h3 className=' mb-3 mb-md-0'>Sigh up for our wewslatter</h3>
            <div className="input-group searchbar ">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              <button className="btn btn-dark btn-lg " type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </section>
      
      <section className=' p-5'>
        <div className=' container text-center'>
          <div className=' row'>
            <div className=' col-md mb-sm-3'>
              <div className=' card bg-dark text-light'>
                <div className=' card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-laptop'></i>
                  </div>
                  <h3 className=' card-title mb-3' >
                    Virtuale
                  </h3>
                  <p className=' card-text'>
                    ihoajnrlkgm erognap vrg gi oergkregsn;fgslj gg jleknkl knaerkgn klaaeklgaklg klrke gl nbklsnerklgn 
                  </p>
                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>
            <div className=' col-md mb-sm-3'>
              <div className=' card bg-secondary text-light'>
                <div className=' card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-person-square'></i>
                  </div>
                  <h3 className=' card-title mb-3' >
                    Virtuale
                  </h3>
                  <p className=' card-text'>
                    ihoajnrlkgm erognap vrg gi oergkregsn;fgslj gg jleknkl knaerkgn klaaeklgaklg klrke gl nbklsnerklgn 
                  </p>
                  <a href='#' className='btn btn-dark'>Read more</a>
                </div>
              </div>
            </div>
            <div className=' col-md mb-sm-3'>
              <div className=' card bg-dark text-light'>
                <div className=' card-body text-center'>
                  <div className='h1 mb-3'>
                    <i className='bi bi-laptop'></i>
                  </div>
                  <h3 className=' card-title mb-3' >
                    Virtuale
                  </h3>
                  <p className=' card-text'>
                    ihoajnrlkgm erognap vrg gi oergkregsn;fgslj gg jleknkl knaerkgn klaaeklgaklg klrke gl nbklsnerklgn 
                  </p>
                  <a href='#' className='btn btn-primary'>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
