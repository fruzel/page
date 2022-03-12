import React from 'react'

import Work from './Work';
import onlineOrder from '../media/onlineOrder.mp4'
import stream from '../media/stream.mp4'
import tinews from '../media/tinews.mp4'
import starlink from '../media/starlink.mp4'


const OnlineDescription = () => {
  return <div>
    A Twitch resource base platform with personalize recommendations.<br />
    • Built a full stack web application for search and save Twitch resources.<br />
    • Developed a web page using React and Ant Design UI.<br />
    • Implemented RESTful APIs using JAVA servlets, retrieved Twitch resources using Twitch provided APIs and store data in MySQL.
  </div>
}


const StreamDescription = () => {
  return <div>
    A Twitch resource base platform with personalize recommendations. <br />
    •	Built a full stack web application for search and save Twitch resources.<br />
    •	Developed a web page using React and Ant Design UI.<br />
    •	Implemented RESTful APIs using JAVA servlets, retrieved Twitch resources using Twitch provided APIs and store data in MySQL.
  </div>
}

const TinDescription = () => {
  return <div>
    'Tinder- like News App <br />
    •	Built a Android new application based on MVVM pattern.<br />
    •	Implemented the bottom bar & page navigation using JetPack navigation component <br />
    •	Utilized Mindorks’s PlaceHolderView to support swipe gestures for liking/disliking the news<br />
    •	Built the Room Database with LiveData & ViewModel to support local cache and offline model<br />
    •	Integrated Retrofit and Rxjava to pull the latest news data from a RESTFUL endpoint (newsapi.org)'
  </div>
}

const StarDescription = () => {
  return <div>
  'React JS based Starlink Trajectory Visualization  <br />
      •	Designed and developed a visualization dashboard using ReactJS and D3 to track satellites in real-time based on geo-location. <br />
      •	Built location, altitude, and duration-based selector to refine satellite search. <br />
      •	Animated selected satellite paths on a world map using D3 to improve the user-friendliness. <br />
      •	Deployed the dashboard to Amazon Web Service for demonstration. '
  </div>
}

function Works(props) {
  return (
    <div>
      <Work show={props.worksState.online} vid={onlineOrder} title={'Online Order'}
        description={OnlineDescription()}
        link={'https://github.com/fruzel/onlineOrder'} />
      <Work show={props.worksState.stream} vid={stream} title='Stream'
        description={StreamDescription()}
        link={'https://github.com/fruzel/Stream'} />
      <Work show={props.worksState.tinews} vid={tinews} title='Tinews'
        description={TinDescription() }
        link={'https://github.com/fruzel/TinNews'} />
      <Work show={props.worksState.starlink} vid={starlink} title='Starlink'
        description={StarDescription()}
        link={'https://github.com/fruzel/Starlink'} />
    </div>
  )
}

export default Works