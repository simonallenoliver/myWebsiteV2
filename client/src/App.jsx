import './App.css'
import ProjectCarousel from './components/ProjectCarousel'

function App() {


  return (
    <>


      <div className='giantContainer'>

        <div className="slideOne">
          <div className='sectionZero'>
            <div className='container'>
              <div className='d-flex justify-content-end myIcons'>
                <a href="https://github.com/simonallenoliver" className='headLinks' target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="mailto:simonallenoliver@gmail.com" className='headLinks'><i class="fa-solid fa-envelope"></i></a>
                <a href="http://www.linkedin.com/in/simon-oliver-66807213b" className='headLinks' target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>

          <div className='sectionOne d-flex align-items-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-9 col-lg-7 mx-auto text-center'>
                  <h1 id='simonOliver'>SIMON OLIVER</h1>
                </div>
              </div>
              <div className='row pb-5'>
                <div className='col-sm-8 col-lg-6 mx-auto text-center '>
                  <h3 id='softwareDeveloper'>SOFTWARE DEVELOPER</h3>
                </div>
              </div>


            </div>
            {/* end container */}

          </div>
          {/* end section one */}

          <div className="sectionOneBottom d-flex justify-content-center align-items-center ">
            <a href="#welcome"><i class="fa-solid fa-angles-down arrows"></i></a>
          </div>

        </div>
        {/* end first slide */}





        <div id='welcome' className='sectionTwo d-flex align-items-center '>

          <div className='container-fluid  '>
            <div className='row offWhite'>
              <div className=' col-sm-8 col-lg-4 mx-auto text-center '>
                <h3 className='welcomeAbode'>Welcome to my digital abode.</h3>
                <img src="/images/digitalAbode.png" id='abodeImage' alt="digital abode" />
                <p id='abodeText'> While you’re here, check out some of my projects or read about my storied past.</p>
                <div className='navBar mx-auto text-center'>
                  <a href="#projects" className='navLinks'>projects</a> <a href="#aboutMe" className='navLinks'>about me</a>
                </div>
              </div>
            </div>
          </div>
          {/* end container */}
        </div>
        {/* end section two */}

        <div id='projects' className='sectionThree '>

          <div className='container '>
            <div className='row'>
              <h2 id='projectHead'>PROJECTS</h2>
              <ProjectCarousel />
            </div>
          </div>
        </div>
        {/* end section three */}

        <div id='aboutMe' className='sectionFour d-flex align-items-center'>

          <div className='container-fluid'>
            <div className='row'>
              <div className="col-5 offset-1">
                <img src="/images/newhs.jpg" id='simonPhoto' alt="simon photo" />
              </div>
              <div className="col-5">
                <h2 id='niceToMeet'>NICE TO MEET YOU</h2>
                <div className='scrollable'>
                  <p className='mb-3'>I’m a full-stack software developer from Minneapolis, Minnesota.
                    I’ve lived here for most of my life - but I did have a stint in beautiful Des Moines,
                    Iowa where I obtained my bachelor’s degree from Drake University and afterwards worked
                    for the state’s Racing and Gaming Commission regulating the online sports
                    betting industry. After four years in the industry, I made the decision to pursue a
                    career that would nurture my passion for creative problem solving and also allow
                    me to acquire a valuable and interesting skill that I could continue to build upon and
                    explore throughout my entire career.
                  </p>
                  <p className='mb-3'>
                    That’s how I ended up here. I now create full-stack CRUD applications using python,
                    javascript, C#, React, MySQL, MongoDB, .NET, Entity, and much, much more. I also like to
                    keep my coding brain fresh by mixing in some game development, using Unity and Godot.
                  </p>
                  <p className='mb-3'>
                    When I’m not coding, I love to stay active, whether that be lifting weights, swimming,
                    hiking, or climbing the occasional tree. I’m a creative problem solver in the kitchen too -
                    to the delight or detriment of my friends and family depending on the day - I’ve recently
                    been obsessed with Mediterranean food. I also enjoy connecting with my out-of-state friends
                    on discord to chat and game together.
                  </p>
                  <p>
                    Want to know even more about me!?
                    <a href="mailto:simonallenoliver@gmail.com" className='bioLinks'> Email me </a> or connect with me on
                    <a href="http://www.linkedin.com/in/simon-oliver-66807213b" className='bioLinks' target="_blank"> Linkedin </a>
                    <i class="fa-regular fa-face-smile-beam"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end giant container */}
      </div>
    </>
  )
}

export default App
