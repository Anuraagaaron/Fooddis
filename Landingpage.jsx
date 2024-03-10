// import './Landingpage.css';
// import logo from './logo.jpg'
// function Landingpage(){
//     return(
//         <div className='container-fluid'>
//             <div className="row">
//                 <div className="col-sm-6">
//                     <img  className='asd' src={logo} width={300} height={250} alt='error'/>

//                 </div>
//                 <div className="col-sm-6 lands">
//                     <button className="land">Donar</button>
//                     <button className='land'>Collector</button>
//                 </div>
//             </div>
            

//         </div>
//     )
// }
// export default Landingpage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css';

function Landingpage() {
  const navigate = useNavigate();

  const donor = () => {
    // Assuming '/donar' is the path you want to navigate to
    navigate('/donor');
  };
  const collector = () => {
    // Assuming '/donar' is the path you want to navigate to
    navigate('/donor');
  };


  return (
   <div className="container-fluid">
      <div className="background-image"></div>
      <h1 className="website-name">Food Management</h1>
      <div className="content">
        <div className="button-container">
          <h2 className="question-heading">Are you?</h2>
          <div className="button-box">
            <button className="button" onClick={donor}>Donor</button>
            <button className="button" onClick={collector}>Collector</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
