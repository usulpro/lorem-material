import React, { Component } from 'react';
import { Chip, TextField, DropDownMenu, MenuItem } from 'material-ui';
import AutoComplete from 'material-ui/AutoComplete';
import { Card, CardActions, CardMedia, CardText } from 'material-ui/Card';

const extraToppings = ['Mushrooms', 'Pepperoni', 'Beef', 'Chicken', 'Jalapenos',
'Pineapple', 'Feta Cheese', 'Spinach', 'Red Pepper', 'Olive', 'Onion', 'Green Pepper']

export default class PizzaOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      toppings: [
        {label: 'Cheese'},
        {label: 'Tomato Sauce'}
      ],
      size: 'Large'
    }
    this.renderChip = this.renderChip.bind(this);
    this.addToppings = this.addToppings.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRequestDelete = this.handleRequestDelete.bind(this);
  }
  handleChange(event, index, value){
    this.setState({
      size: value
    })
  }

  handleRequestDelete(data) {
    return () => {
      const toppings =  this.state.toppings.filter( (val) => val.label!==data.label);
      this.setState({toppings});
    }
  }

  addToppings (value, index){
    const newTop = { label: value }
    const toppings = this.state.toppings.concat(newTop);
    this.setState({ toppings });
  }
  renderChip(data, index){
    return(
      <Chip
        key={index}
        onRequestDelete={this.handleRequestDelete(data)}
        style={{margin: 4}}
        >
        {data.label}
      </Chip>
    )
  }
  render(){
    return(
      <div>
        <Card style={{ width: '100%' }}>
          <CardText>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <TextField
                floatingLabelText="Name"
                floatingLabelFixed={true}
                value="John Dow"
              />
              <div style={{width: 20}}/>
              <TextField
                floatingLabelText="Phone Number"
                floatingLabelFixed={true}
                value="+1 (666) 277-9889"
              />
            </div>
          </CardText>
          <DropDownMenu
             value={this.state.size}
             onChange={this.handleChange}
             autoWidth={false}
             style={{width: '100%'}}
          >
              <MenuItem value="Small" primaryText="Small" />
              <MenuItem value="Medium" primaryText="Medium" />
              <MenuItem value="Large" primaryText="Large" />
              <MenuItem value="XL" primaryText="Extra Large" />
          </DropDownMenu>
          <CardText>
            <div>
              <div
                style = {{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {this.state.toppings.map(this.renderChip)}
              </div>
              <AutoComplete
                  floatingLabelText="More Toppings"
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={extraToppings}
                  maxSearchResults={5}
                  onNewRequest={this.addToppings}
                />
            </div>
          </CardText>
        </Card>
      </div>
    )
  }
}
