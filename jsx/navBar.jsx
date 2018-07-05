
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, Card, Icon, Image, Menu, Progress, Dropdown } from 'semantic-ui-react';



class NavBar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
        <Menu color="green" inverted>
          <Menu.Item name='Home' href="/dashboard" />
          <Menu.Item name ='Resume'/>
          <Menu.Item name='Accomplishments'/>
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>
    );
  }
}



export default NavBar;