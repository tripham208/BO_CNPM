import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import { Link } from "react-router-dom";
import './TextContainer.css';

export const Info = ({ name }) => (
  <div className='textContainer'>
    <div>
      <h1>
        Live Chat  info {name}
      </h1>
      <Link to={`/edit?name=${name}`}>
          <button className={'button mt-20'} type="submit">sửa thông tin</button>
        </Link>
        <Link to={`/creategr?name=${name}`}>
          <button className={'button mt-20'} type="submit">tạo nhóm</button>
        </Link>
    </div>
  </div>
);
