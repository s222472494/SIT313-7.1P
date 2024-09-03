import React from 'react';
import { Segment, Grid, Header as SemanticHeader, Icon, Input } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
  return (
    <Segment className= 'FooterSegment'>
      <Segment className= 'SignupSegment'>
        <SemanticHeader as='h3'>SIGN UP FOR OUR DAILY INSIDER</SemanticHeader> 
        <Input action='Subscribe' placeholder='Enter your email...' />
      </Segment>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <SemanticHeader as='h4'>Explore</SemanticHeader>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </Grid.Column>
          <Grid.Column>
            <SemanticHeader as='h4'>Support</SemanticHeader>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </Grid.Column>
          <Grid.Column>
            <SemanticHeader as='h4'>Stay Connected</SemanticHeader>
            <Icon name='facebook' />
            <Icon name='twitter' />
            <Icon name='instagram' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign='center'>MotorSport101</Segment>
    </Segment>
  );
};

export default Footer;
