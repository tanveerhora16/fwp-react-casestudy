  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';
  import OutputBox from './Components/OutputBox';
  import Button from './Components/Button';

  class App extends Component {
    constructor(){
      super();
      this.state = {
        data: ''
          }
                }


    render() {

         return (
        
        <div className="App">
          <div className="App-title">
              React Calculator
           </div>

            <div className="outer-box">
              <OutputBox  data={this.state.data} />    

              <div className = "calculator-box">
                <div className="button-row">
                  <Button label={'1'} handleClick={this.handleClick} type='input' />
                  <Button label={'2'} handleClick={this.handleClick} type='input' />
                  <Button label={'3'} handleClick={this.handleClick} type='input' />
                  <Button label={'4'} handleClick={this.handleClick} type='input' />
                  <Button label={'-'} handleClick={this.handleClick} type='action' />
                  <Button label={'+'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                  <Button label={'5'} handleClick={this.handleClick} type='input' />
                  <Button label={'6'} handleClick={this.handleClick} type='input' />
                  <Button label={'7'} handleClick={this.handleClick} type='input' />
                  <Button label={'8'} handleClick={this.handleClick} type='input' />
                  <Button label={'*'} handleClick={this.handleClick} type='action' />
                  <Button label={'/'} handleClick={this.handleClick} type='action' />
                </div>
                <div className="button-row">
                  <Button label={'9'} handleClick={this.handleClick} type='input' />
                  <Button label={'.'} handleClick={this.handleClick} type='input' />
                  <Button label={'0'} handleClick={this.handleClick} type='input' />
                  <Button label={'Cls'} handleClick={this.handleClick} type='action' />
                  <Button label={'='} handleClick={this.handleClick} type='action' />
                </div>
              </div>
          </div>
                     
        </div>
                 );
            }

       handleClick=(event)=>{
           let value = event.target.value;
             console.log('value',event.target.value);
               switch (value) {

                            case '=': {
                                  let answer = eval(this.state.data).toString();
                                   this.setState({ data:answer });
                                   break;
                                       }
                            case 'Cls': {
                                   this.setState({ data: '' });
                                   break;
                                        }
                           default:    {
                                    this.setState({ data: this.state.data += value})
                                    console.log('default',value);
                                    break;
                                       }
                                 }
                           }               
                    }

  export default App;
