import React, { Component } from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth,
  eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth,
  eighteenth, nineteenth, twentieth, twentyfirst, twentysecond, twentythird, twentyfourth,
  twentyfifth, twentysixth, twentyseventh, twentyeighth, twentyninth, thirtieth, thirtyfirst, thirtysecond,
 thirtythird, thirtyfourth, thirtyfifth, thirtysixth, thirtyseventh, thirtyeighth, thirtyninth, fortieth} from '../assets'


const array = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth,
   eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth,
   eighteenth, nineteenth, twentieth, twentyfirst, twentysecond, twentythird, twentyfourth,
 twentyfifth, twentysixth, twentyseventh, twentyeighth, twentyninth, thirtieth, thirtyfirst, thirtysecond,
thirtythird, thirtyfourth, thirtyfifth, thirtysixth, thirtyseventh, thirtyeighth, thirtyninth, fortieth]



class Projects extends Component {
  state = {
    list: array.reverse()
  }
  render() {
    return (
      <div className="ProjectContainer">


        {this.state.list.map((item, index) => (
          <img className="ProjectImage" src={item}/>

          )
        )}




      </div>
    );
  }
}

export default Projects;
