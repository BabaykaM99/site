import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Grid, Icon, Item, Modal, Button, Header } from 'semantic-ui-react'
import NavBar from './navBar.jsx'
import { Timeline } from 'react-twitter-widgets'

class Dashboard extends React.Component {
  render () {
    return (
      <Container fluid>
        <NavBar />
        <Container >
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column key='white' className='dashPanel'>
                <a className='twitter-timeline' data-dnt='true' data-theme='dark' data-link-color='#E81C4F' href='https://twitter.com/hunter_duane/lists/infosec?ref_src=twsrc%5Etfw'>A Twitter List by hunter_duane</a> <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
              </Grid.Column>
              <Grid.Column className='dashPanel'>
                <Item.Group divided >
                  <Item>
                    <Item.Content>
                      <Item.Header style={{marginTop: 5}} class='override'>About Me:</Item.Header>
                      <Item.Description>
                        <Item.Description>
                          {/* aboutme Modal */}
                          <Modal trigger={<Button size='huge' color='blue' fluid>
                            <Button.Content visible />
                            <Button.Content hidden>
                              Details
                            </Button.Content>
                          </Button>} closeIcon>
                            <Header icon='archive' content='Ingredients' />
                            <Modal.Content>
                              <div className='title' />
                            </Modal.Content>
                            <Modal.Actions>
                              <Button color='green' onClick={this.breakfastadd}>
                                <Icon name='checkmark' /> I have eaten this!
                              </Button>
                              <Button color='red' onClick={this.breakfastdel}>
                                <Icon name='ban' /> I have NOT eaten this yet.
                              </Button>
                            </Modal.Actions>
                          </Modal>
                        </Item.Description>
                      </Item.Description>
                      <Item.Extra />
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Container>
    )
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'))
