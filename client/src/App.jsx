import './App.css'

function App() {


  return (
    <>
    <div className='sectionZero'>
  <div className='container'>
  <div className='d-flex justify-content-end myIcons'>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-github"></i>
      </div>
  </div>
  </div>
      
      <div className='sectionOne d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-7 mx-auto  '>
              <h1 id='simonOliver'>SIMON OLIVER</h1>
            </div>
          </div>
          <div className='row pb-5'>
            <div className='col-6 mx-auto text-end '>
              <h3 id='softwareDeveloper'>SOFTWARE DEVELOPER</h3>
            </div>
          </div>
        </div>
        {/* end container */}
      </div>
      {/* end section one */}

      <div className='sectionTwo'>

        <div className='container  '>
          <div className='row'>
            <div className='col-4 mx-auto text-center'>

              <h3 className='welcomeAbode'>Welcome to my digital abode.</h3>
              <img src="/images/digitalAbode.png" id='abodeImage' alt="digital abode" />
              <p>I’m a full-stack developer with a passion for learning and creating. While you’re here, check out some of my projects or read about my storied past.</p>
              <div>navBar</div></div>

          </div>
        </div>
        {/* end container */}
      </div>
      {/* end section two */}

      <div className='sectionThree'>
        <div className='container'>
          <div className='row'>
            projects
          </div>
          <div className='row'>
            <div className='col'>
              arrow image
            </div>
            <div className='col'>
              name description arrow
            </div>

          </div>

          <div className='row'>
            <div className='col'>
              Image
            </div>
            <div className='col'>
              header text
            </div>
          </div>
        </div>
      </div>
      {/* end section three */}

    </>
  )
}

export default App
