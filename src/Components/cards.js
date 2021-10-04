import React from 'react';
import feup from '../images/feup.jpg';
import aws from '../images/aws.jpg';
import cambridge from '../images/cambridge.png';
import deloitte from '../images/deloitte.jfif';
import '../index.css';

class Cards extends React.Component {
    render() {
        return (
            <div>

                <div class=" row">
                    <h2 class="h2 mx-auto">Education & Certifications</h2>
                </div>

                <div class="row">
                    <div class="card w-50 mx-auto bg-white ">
                        <div class="row bg-white ">
                            <div class="col-3 mr-2 bg-white">
                                <img class="rounded mx-auto d-block mx-auto" style={{ width: '120%' }} alt="feup logo" src={feup}
                                    data-holder-rendered="true" />
                            </div>

                            <div class="col mr-2 bg-white"><b class="bg-white">Faculdade de Engenharia da Universidade do Porto</b>
                                <p class="bg-white">Integrated Masters in Computer Engineering</p>
                                <p class="bg-white text-secondary">(2016-2021)</p></div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="card w-50 mx-auto bg-white ">
                        <div class="row bg-white ">
                            <div class="col-3 mr-2 bg-white">
                                <img class="rounded mx-auto d-block bg-white" style={{ width: '60%' }} alt="cambridge logo" src={cambridge}
                                    data-holder-rendered="true" />
                            </div>

                            <div class="col mr-2 bg-white"><b class="bg-white">Cambridge Assessment English</b>
                                <p class="bg-white">Cambridge English Proficiency (C2 Level)</p>
                                <p class="bg-white text-secondary">(2016)</p></div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="card w-50 mx-auto bg-white ">
                        <div class="row bg-white ">
                            <div class="col-3 mr-2 bg-white">
                                <img class="rounded mx-auto d-block" style={{ width: '60%' }} alt="AWS logo" src={aws}
                                    data-holder-rendered="true" />
                            </div>

                            <div class="col mr-2 bg-white"><b class="bg-white">Amazon Web Services AWS</b>
                                <p class="bg-white">AWS Certified Cloud Practitioner</p>
                                <p class="bg-white text-secondary">(2021)</p></div>
                        </div>
                    </div>
                </div>

                <div class=" row">
                    <h2 class="h2 mx-auto">Work Experience</h2>
                </div>
                <div class="row">
                    <div class="card w-50 mx-auto bg-white ">
                        <div class="row bg-white ">
                            <div class="col-3 mr-2 bg-white">
                                <img class="rounded mx-auto d-block mx-auto" style={{ width: '80%' }} alt="Deloitte logo" src={deloitte}
                                    data-holder-rendered="true" />
                            </div>

                            <div class="col mr-2 bg-white"><b class="bg-white">Deloitte Digital Studio</b>
                                <p class="bg-white">Internship - Mobile App Development</p>
                                <p class="bg-white text-secondary">(2019)</p></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="card w-50 mx-auto bg-white ">
                        <div class="row bg-white ">
                            <div class="col-3 mr-2 bg-white">
                                <img class="rounded mx-auto d-block mx-auto" style={{ width: '80%' }} alt="Deloitte logo" src={deloitte}
                                    data-holder-rendered="true" />
                            </div>

                            <div class="col mr-2 bg-white"><b class="bg-white">Deloitte Digital Studio</b>
                                <p class="bg-white">Tech Analyst - Front-End Development</p>
                                <p class="bg-white text-secondary">(2021 - Ongoing)</p></div>
                        </div>
                    </div>
                </div>


               





            </div>

        )
    }
}

export default Cards;

