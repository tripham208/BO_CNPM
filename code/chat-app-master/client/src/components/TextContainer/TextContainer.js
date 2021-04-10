import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import { Link } from "react-router-dom";
import './TextContainer.css';

export const TextContainer = ({ users,name2 }) => (
  <div className='textContainer'>
    
    <div>
      <h1>
        Live Chat {name2}
      </h1>
      
    </div>
    {users ? (
      <div>
        <h1>Users chatting</h1>
        <div className='activeContainer'>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className='activeItem'>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);
