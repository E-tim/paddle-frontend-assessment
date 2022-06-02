import React from 'react'

const Sections = () => {
  return (
    <div>
      <section>
        <h2>SOMETHING AWESOME IS <br></br> COMING SOON</h2>
        <p>Your all-in-one affiliate tracking software <span>track, automate </span>
        and <br></br> <span>optimize</span> your campaigns
        </p>

        <div className='count-down'>
          <div className='subCount-down'>
            <h3>7 <br></br> <span>Days</span></h3>
          </div>
          <div className='subCount-down'>
            <h3>24 <br></br> <span>Hours</span> </h3>
          </div>
          <div className='subCount-down'>
            <h3>24 <br></br> <span>Minutes</span></h3>
          </div>
          <div className='subCount-down'>
            <h3>24 <br></br> <span>Seconds</span> </h3>
          </div>
        </div>


        <form action='#' method='POST'>
          <input type='text' placeholder='First Name' name='firstName'/>
          <input type='text' placeholder='Last Name' name='lastName'/>
        </form>

        <div className='myForm' >
          <input type='text' placeholder='Enter your email address' />
          <button>JOIN OUR WAITING LIST</button>
        </div>



        <div className='bottom'>
          <div className='bottoms'></div>
        </div>
      </section>
    </div>
  )
}

export default Sections