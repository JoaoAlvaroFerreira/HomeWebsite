import React from 'react';
import pic from '../images/self.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




class Profile extends React.Component {
    render() {
        return (
            <div class="d-flex justify-content-center mt-2 mb-2">
                <div class="container">

                    <div class="row">
                        <div class="col-sm-2 mr-2">
                            <img class="rounded-circle z-depth-2 mx-auto" style={{ width: '100%' }} alt="profile-pic" src={pic}
                                data-holder-rendered="true" />
                        </div>
                        <div class="col-lg-9">
                            <div class="column">

                                <div class="row">
                                    <h2 class="h2">João Álvaro Ferreira</h2></div>
                                <div class="row">
                                    João Álvaro Ferreira is a fifth year student in the Computer Engineering Integrated Masters in FEUP. Currently developing his thesis, he has experience in game development, 3D modeling, machine learning and web development.
                        </div>
                            </div>
                        </div>
                    </div>
                  

                    <div class="row pl-2">
                   <a style={{color: "black", textDecoration: "none" }} href="https://www.facebook.com/JAlvaroFerreira"> <div className="pl-4"><FontAwesomeIcon icon={faFacebook} /> </div></a>
                   <a style={{color: "black", textDecoration: "none" }} href="https://github.com/JoaoAlvaroFerreira"> <div className="pl-2"><FontAwesomeIcon icon={faGithub} /> </div></a>
                   <a style={{color: "black", textDecoration: "none" }} href="https://www.instagram.com/joaoalvaroferreira/"> <div className="pl-2"><FontAwesomeIcon icon={faInstagram} /> </div></a>
                   <a style={{color: "black", textDecoration: "none" }} href="https://www.twitter.com/JoaoAlvaroCSF"> <div className="pl-2"><FontAwesomeIcon icon={faTwitter} /> </div></a>
                   <a style={{color: "black", textDecoration: "none" }} href="https://www.linkedin.com/in/joao-alvaro-ferreira/"> <div className="pl-2"><FontAwesomeIcon icon={faLinkedin} /> </div></a>

                    </div>
                </div>

            </div>


        );
    }

}

export default Profile;