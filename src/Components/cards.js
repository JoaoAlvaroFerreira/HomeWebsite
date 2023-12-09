import React from 'react';
import feup from '../images/feup.jpg';
import aws from '../images/aws.jpg';
import cambridge from '../images/cambridge.png';
import deloitte from '../images/deloitte.jfif';
import miniclip from '../images/miniclip.png';
import '../index.css';

class Card extends React.Component{

    constructor(props){
        super(props);
        this.title       = props.title
        this.img_file    = props.img_file
        this.img_alttext = props.img_alttext
        this.description = props.description
        this.time_period = props.time_period
    }
    render(){
                return(        
                <div class="row">
                <div class="card w-50 mx-auto bg-white ">
                    <div class="row bg-white ">
                        <div class="col-3 mr-2 bg-white">
                            <img class="rounded mx-auto d-block mx-auto" style={{ width: '80%' }} alt={this.img_alttext} src={this.img_file}
                                data-holder-rendered="true" />
                        </div>
                        <div class="col mr-2 bg-white"><b class="bg-white">{this.title}</b>
                            <p class="bg-white">{this.description}</p>
                            <p class="bg-white text-secondary">{this.time_period}</p></div>
                    </div>
                </div>
            </div>
            )
    }
}

class CardSection extends React.Component{

    constructor(props){
        super(props);
        this.section_title = props.section_title
        this.cards_list    = props.cards_list
    }

    render(){
        return(
            <div>
                <div class="row">
                    <h2 class="h2 mx-auto">{this.section_title}</h2>
                </div>
                {this.cards_list}
            </div>
        )
    }
}

class Cards extends React.Component {
    render() {
        let workMiniclip = <Card title      = "Miniclip Portugal" 
                                img_alttext = "Miniclip logo" 
                                img_file    = {miniclip} 
                                description = "Software Developer - 8 Ball Pool"
                                time_period = "(2022 - Ongoing)"/>
        
        let workDeloitte = <Card title      = "Deloitte Digital Studio" 
                                img_alttext = "Deloitte logo" 
                                img_file    = {deloitte} 
                                description = "Tech Analyst"
                                time_period = "(2021)"/>
        
        let intDeloitte  = <Card title      = "Deloitte Digital Studio" 
                                img_alttext = "Deloitte logo" 
                                img_file    = {deloitte} 
                                description = "Internship - Mobile App Development"
                                time_period = "(2019)"/>

        let studyFEUP    = <Card title      = "Faculdade de Engenharia da Universidade do Porto" 
                                img_alttext = "FEUP logo" 
                                img_file    = {feup} 
                                description = "Integrated Masters in Computer Engineering"
                                time_period = "(2016 - 2021)"/>
        
        let certCambridge = <Card title     = "Cambridge Assessment English" 
                                img_alttext = "Cambridge logo" 
                                img_file    = {cambridge} 
                                description = "Cambridge English Proficiency (C2 Level)"
                                time_period = "(2016)"/>
        
        let certAWS      = <Card title      = "Amazon Web Services" 
                                img_alttext = "Amazon logo" 
                                img_file    = {aws} 
                                description = "AWS Certified Cloud Practitioner"
                                time_period = "(2021)"/>

        let sectionWork  = <CardSection section_title = "Work Experience" cards_list = {[workMiniclip, workDeloitte, intDeloitte]}/>
        let sectionStudy = <CardSection section_title = "Education & Certifications" cards_list = {[studyFEUP, certCambridge, certAWS]}/>
        
        return (
                <div>{sectionWork}
                     {sectionStudy}</div>
                )        
    }
}

export default Cards;

