import React from 'react';
import hersogFounder from '../img/hersogFounder.png';
import architecture from '../img/architecture.png';
import learnMoreIcon from '../img/learnMoreIcon.png';
import interior from '../img/interior.png';
import landscape from '../img/landscape.png';
import communityCenter from '../img/communityCenter.png';

export default function MainSection() {
  return (
    <div>
      <div className="col-founder">
        <img src={hersogFounder} alt={'hersog_founder'} />
        <div><span>LIVE</span>BETTER.</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span>&#8722;</span>
        </p>

        <div>
          <span className="fa fa-chevron-right" aria-hidden="true" />
          <span><a href="">FULL ARTICLE</a></span>
        </div>
      </div>
      <div className="col-1 main-card">
        <img src={architecture} alt={'architecture'} />
        <div>
          <div className="architecture-category">ARCHITECTURE</div>
          <div className="category-type">CAVE RESIDENCE</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="learn-more">
          <img src={learnMoreIcon} alt={'learn more'} />
          <div>Learn More</div>
        </div>
      </div>
      <div className="col-1 main-card">
        <img src={interior} alt={'interior'} />
        <div>
          <div className="interior-category">INTERIOR</div>
          <div className="category-type">VEGA COTTAGE</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="learn-more">
          <img src={learnMoreIcon} alt={'learn more'} />
          <div>Learn More</div>
        </div>
      </div>
      <div className="col-1 main-card">
        <img src={landscape} alt={'landscape'} />
        <div>
          <div className="landscape-category">Landscape</div>
          <div className="category-type">AGUANTAO HOUSE</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="learn-more">
          <img src={learnMoreIcon} alt={'learn more'} />
          <div>Learn More</div>
        </div>

      </div>
      <div className="col-community-center">
        <div className="community-text">
          <div>PALAZZI UNIVERSITY</div>
          <span>&#8722;</span>
          <div>COMMUNITY CENTER</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
            eiusmod tempor incididuntut labore et dolore magna aliqua.
          </p>
          <span className="fa fa-chevron-right" aria-hidden="true" />
        </div>
        <div>
          <img src={communityCenter} alt={'community center'} />
        </div>
      </div>
    </div>
  );
}
