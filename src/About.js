import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About-container">
        <h4>Work</h4>
        <p>I work as a frontend developer (sometimes backend, if I get lucky),
          my favorite techniques for now are React, NodeJS and ThreeJS for hobby projects.
          I do not like bugs and errors in a project, so if I can and am able to I always
          implement lint rules, tests, CI and other quality of life things. 
        </p>
        <h4>
          Life \(ᵔᵕᵔ)/
        </h4>
        <p>
          I have a girlfriend who is also an amazing developer (Java and Android),
          we live together in the south of Stockholm with our son. The cutest little boy
          that have ever walked the planet earth (though he can't walk yet).
        </p>
        <p>Computers and tech has always been an interest for me, every since I got my first
          computer in the 80's, it was a 286pc, already old for it's time, but I loved it and
          played games that also were a bit outdated for it's time.
          </p>
        <p>One of my other hobbies is board games, penn & paper and TCG games, I'm a part of a association called
          Örbys rollspel och fikaförening (Örff) with around 30 members.
        </p>
      </div>
    );
  }
}

export default About;
