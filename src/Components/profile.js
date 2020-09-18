import React from 'react';




class Profile extends React.Component {
    render() {
        return (
            <div class="d-flex justify-content-center mt-3 mb-3">
                <div class="container">
                    <div class="row">
                        <div class="column">
                        <img class="rounded-circle z-depth-2 mx-auto" style={{width:'60%'}} alt="profile picture" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                        data-holder-rendered="true" />
                        </div>
                        <div class="column ml-5">
                            <div class="row">
                        <h2 class="h2 mx-auto">João Álvaro Ferreira</h2></div>
                        <div class="row">
                            About me
                        </div>
                        </div>
                        </div>

                   
                </div>

                
            </div>


        );
    }

}

export default Profile;