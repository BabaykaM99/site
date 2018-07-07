
import React from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  render () {
    return (
      <Menu color='blue' inverted>
        <Menu.Item name='Home' href='/dashboard' />
        <Menu.Item name='Resume' href='/resume' />
        <Menu.Item name='Accomplishments' href='/accomplishments' />
        <Menu.Menu position='right' />
      </Menu>
    )
  }
}

export default NavBar
