import React from 'react'; 
import ReactDOM from 'react-dom'; 

import SingleComment from './SingleComment'; 
import UserCard from './UserCard'; 
import profil from './image/profile.jpg';
 import  profil2  from './image/profile2.jpg';
 import  profil3  from './image/profile3.jpg';
 import HemisphereDisplay from './HemisphereDisplay';
//"App" componenti dahil ediliyor

 




  class App extends React.Component { //class component
    render() {
      
      window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
      ); 

      return(
        <div>
          You are in the nothern hemispehere
        </div>
      )
    }
  }

// const App = () => {
  // return ( //functional component
  //   <div>
  //     latitude: 
  //   </div>
  // )

// örn:1 singlecomponent
      // return(
    //      <div className='ui comments'>
    //        <SingleComment/>
 
    //      </div>
    // )


    //örn:2 props child signlecomponent
    // return (
    //   <div className='ui comments'>
    //     <UserCard>
    //       <div>
    //         hello my name is Musitu, live in Istanbul
    //       </div>
    //     </UserCard>
    //     <UserCard>
    //         <SingleComment 
    //         name='Alex'
    //         date='Today at 5:00PM'
    //         text='its amazing'
    //         picture={profil}
    //         />
    //     </UserCard>
    //     <UserCard>
    //       <SingleComment 
    //       name='Jack'
    //       date='Today at 6:00PM'
    //       text='Great job'
    //       picture={profil2}
    //       />
    //     </UserCard>
    //     <UserCard>
    //       <SingleComment 
    //       name='Sarah'
    //       date='Today at 7:00PM'
    //       text='Thanks'
    //       picture={profil3}
    //       /> 
    //     </UserCard>
    //   </div>  
    // )

//}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)