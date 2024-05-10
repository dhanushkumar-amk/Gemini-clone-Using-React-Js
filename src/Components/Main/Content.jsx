import React from 'react';import {assets} from '../../assets/assets';
import './Content.css';

const Content = () => {
  return (
    <>
      <div className='main'>
        <div className='nav'>
          <p>Gemini</p>
          <img
            src={assets.user_icon}
            alt=''
          />
        </div>

        <div className='main-container'>
          <div className='greet'>
            <p>
              <span>Hello, Jack.</span>
            </p>
            <p>How can I help You today ?</p>
          </div>
          <div className='cards'>
            <div className='card'>
              <p>Suggest the beautiful places see on an upcoming road trip</p>
              <img src={assets.compass_icon} />
            </div>
            <div className='card'>
              <p>Give the some idea for Creating the New user Interface</p>
              <img src={assets.bulb_icon} />
            </div>
            <div className='card'>
              <p>Suggest the beautiful places see on an upcoming road trip</p>
              <img src={assets.message_icon} />
            </div>
            <div className='card'>
              <p>write the code on sample java program</p>
              <img src={assets.code_icon} />
            </div>
          </div>

          <div className='main-bottom'>
            <div className='search-box'>
              <input
                type='text'
                placeholder='Enter the prompt....'
              />
              <div>
                <img
                  src={assets.gallery_icon}
                  alt=''
                />
                <img
                  src={assets.mic_icon}
                  alt=''
                />
                <img
                  src={assets.send_icon}
                  alt=''
                />
              </div>
            </div>
            <p className='bottom-info'>
              Gemini may display inaccurate info, including about people, so
              double check its response, Your privacy and Gemini app
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
