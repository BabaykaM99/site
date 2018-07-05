import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, Card, Icon, Image, Menu, Progress, Item, Modal, Button, Header } from 'semantic-ui-react';
import NavBar from './navBar.jsx';

class Dashboard extends React.Component {
  
  render() {
    
    return (
      <Container fluid>
        <NavBar></NavBar>
        <Grid divided='vertically' centered>
          <Grid.Row columns={3} >
            <Grid.Column width="3" key="white">
              <Container className="dashPanel" >
                <div className="title">
                  <h1>{name}</h1>
                </div>
              </Container>
            </Grid.Column>

            {/*Statistics Column!*/}
            {/*Will be used to display any sort of userbased statistics*/}
            {/*Added react-google-charts for our chart needs*/}
            <Grid.Column>
      
            </Grid.Column>

            {/*Meal Plan Column!*/}
            <Grid.Column >
              <Container className="dashPanel" >
              <div className="title">
                <h1>Today's Meals</h1>
              </div>
                <Item.Group divided>
                  {/*Breakfast*/}
                  <Item>
                    <Item.Content>
                      <Item.Header>Breakfast:</Item.Header>
                      <Item.Description>
                        <Item.Description>
                        {/*Ingredients Modal*/}
                        <Modal trigger=
                          {<Button size='huge' color='orange' fluid animated='fade'>
                            <Button.Content visible>
                              
                            </Button.Content>
                            <Button.Content hidden>
                              Details
                            </Button.Content>
                          </Button>} closeIcon>
                          <Header icon='archive' content='Ingredients' />
                          <Modal.Content>
                            <div className="title">
                              <h1> contains:</h1><br/>
                            </div>
                            <p></p>
                          </Modal.Content>
                          <Modal.Actions>
                                <Button color='green'>
                                  <Icon name='checkmark' /> I have eaten this!
                                </Button>
                                <Button color='red' >
                                  <Icon name='ban' /> I have NOT eaten this yet.
                                </Button>
                              </Modal.Actions>
                        </Modal>
                      </Item.Description>
                      </Item.Description>
                      <Item.Extra>
                      </Item.Extra>
                    </Item.Content>
                  </Item>

                  <Item>
                    {/*Lunch*/}
                    <Item.Content>
                      <Item.Header>Lunch:</Item.Header>
                      <Item.Description>
                        {/*Ingredients Modal*/}
                        <Modal trigger=
                          {<Button size='huge' color='orange' fluid animated='fade'>
                            <Button.Content visible>
                              
                            </Button.Content>
                            <Button.Content hidden>
                              Details
                            </Button.Content>
                          </Button>} closeIcon>
                          <Header icon='archive' content='Ingredients' />
                          <Modal.Content>
                            <div className="title">
                              <h1> contains:</h1><br/>
                            </div>
                            <p></p>
                          </Modal.Content>
                          <Modal.Actions>
                                <Button color='green'>
                                  <Icon name='checkmark' /> I have eaten this!
                                </Button>
                                <Button color='red'>
                                  <Icon name='ban' /> I have NOT eaten this yet.
                                </Button>
                              </Modal.Actions>
                        </Modal>
                      </Item.Description>
                      <Item.Extra>
                      </Item.Extra>
                    </Item.Content>
                  </Item>

                  <Item>
                    {/*Dinner*/}
                    <Item.Content>
                      <Item.Header>Dinner:</Item.Header>
                      <Item.Description>
                        <Item.Description>
                      {/*Ingredients Modal*/}
                        <Modal trigger=
                          {<Button size='huge' color='orange' fluid animated='fade'>
                            <Button.Content visible>
                              
                            </Button.Content>
                            <Button.Content hidden>
                              Details
                            </Button.Content>
                          </Button>} closeIcon>
                          <Header icon='archive' content='Ingredients' />
                          <Modal.Content>
                            <div className="title">
                              <h1> contains:</h1><br/>
                            </div>
                            <p></p>
                          </Modal.Content>
                              <Modal.Actions>
                                <Button color='green' >
                                  <Icon name='checkmark' /> I have eaten this!
                                </Button>
                                <Button color='red' >
                                  <Icon name='ban' /> I have NOT eaten this yet.
                                </Button>
                              </Modal.Actions>
                        </Modal>
                      </Item.Description>
                      </Item.Description>
                      <Item.Extra>
                        
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
                {/* You can set currentcalories in the database to see progress bar. */}
                <div className="title">
                  <h1>Calorie Details</h1>
                </div>
              </Container>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}



ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
