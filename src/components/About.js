import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function About() {
  return (
    <div>
      <label className="chigo"><h1 className="image mt-5">Chigozie C. Francis</h1>
      </label><br />
      <a href="https://github.com/francisChigozie">
        <img  src="./Chigozie_F.jpg" width="600" 
              title="Mr. Francis" caption="Mr. Francis"
              alt="Chigozie C. Francis" className="image mt-2"/>
         <div className="graph mt-5 form-group" >
           </div></a> 
           <div className="graph"> 
           <p className="about-page">
              After the last corona virus 2019 experience,<br/> I found out how much 
              people were relying on the web (online and internet of a thing) to accomplish most
            of their needs.
                    I decided to become a Web and App Developer (Software Engineer)
            so that I can be of help to many people around the world.
            Are you looking for a <mark>Full Stack Developer ?</mark> Take some times and visit my 
             <a href="https://github.com/francisChigozie"> Portfolio</a>         
          </p>    
         </div>
    </div>
  )
}

const navStyle = {
        color: 'green',textDecoration: 'none'
    }