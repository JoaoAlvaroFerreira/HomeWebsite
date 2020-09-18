import React from 'react';




class Profile extends React.Component {
    render() {
        return (
            <div class="d-flex justify-content-center mt-5">
            <div class="container">
            <div class="row">
            <h2 class="h2 mx-auto">João Álvaro Ferreira</h2></div>
    
            <div class="row">
            <img class="rounded-circle z-depth-2 mx-auto" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              data-holder-rendered="true"/>
              </div>
              <div class="row">
                  ABOUT ME
              </div>
              </div>
            </div>
            );
        }
    
}

export default Profile;