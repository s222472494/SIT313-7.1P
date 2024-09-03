import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import FeatureCards from '../components/FeatureCards';
import { articlesData, eventsData } from '../components/FeatureCardData';


const HomePage = () => {
  return (
    <>
      <Segment className='imageSegment'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/c/cf/2012_WTCC_Race_of_Japan_%28Race_1%29_opening_lap.jpg' fluid />
      </Segment>
      <FeatureCards title='Featured Articles' data={articlesData} />
      <Button>See More Featured Articles</Button>
      <FeatureCards title='Featured Events' data={eventsData} />
      <Button>See More Featured Events</Button>
    </>
  );
}

export default HomePage;