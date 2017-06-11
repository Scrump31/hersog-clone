import React from 'react';
// import '../sass/index.scss';


export default function MainSection() {
  return (
    <div>
      <div>
        <div className="col-founder">
          <img src={'src/img/hersog_founder.png'} alt={'hersog_founder'} />
          <div>Live Better</div>
          <div>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </div>
          <div>
              Learn More
            </div>

        </div>
        <div className="col-1">
          <div>
            <img src={'src/img/architecture.png'} alt={'architecture'} />
            <div>Architecture</div>
            <div>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </div>
            <div>
              Learn More
            </div>
          </div>
        </div>
        <div className="col-1">
          <img src={'src/img/interior.png'} alt={'interior'} />
          <div>Interior</div>
          <div>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </div>
          <div>
              Learn More
            </div>

        </div>
        <div className="col-1">
          <img src={'src/img/landscape.png'} alt={'landscape'} />
          <div>Landscape</div>
          <div>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </div>
          <div>
              Learn More
            </div>

        </div>
        <div className="col-community-center">
          <div className="community-text">
            <div>Piazza University</div>
            <div>Community Center</div>
            <div>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit,
                sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </div>
            <div>
              Learn More
            </div>

          </div>
          <div>
            <img src={'src/img/community_center.png'} alt={'community_center'} />
          </div>
        </div>
      </div>
    </div>
  );
}
