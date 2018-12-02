import React, { Component } from 'react';
import './Contacts.css';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import mail from './mail.png';

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <div>
          <a href={'https://www.linkedin.com/in/mikael-modig-19190ba7/'}>
            <img className="Projects-item-git" src={linkedin} alt="link"/>Linkedin
          </a>
        </div>
        <div>
          <a href={'https://www.facebook.com/profile.php?id=624237162'}>
            <img className="Projects-item-git" src={facebook} alt="link"/>Facebook
          </a>
        </div>
        <div>
          <a href={'https://www.instagram.com/'}>
            <img className="Projects-item-git" src={instagram} alt="link"/>Instagram
          </a>
        </div>
        <div>
          <a href={'href="mailto:mail@mikaelmodig.se"'}>
            <img className="Projects-item-git" src={mail} alt="link"/>mail@mikaelmodig.se
          </a>
        </div>
      </div>
    );
  }
}

export default Contacts;
