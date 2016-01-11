'use strict';

import React, { Component } from 'react-native';

import DatePicker from './components/date-picker';
//import TimePicker from './components/time-picker';
import DateTimePicker from './components/date-time-picker';

export default class DateTimePickers extends Component {
  render() {
    const { mode, ...props } = this.props;

    if (mode === 'date') {
      return ( <DatePicker { ...props } /> );
    //} else if (mode === 'time') {
      //return ( <TimePicker { ...props } /> );
    } else {
      return ( <DateTimePicker { ...props } /> );
    }
  }
}

DateTimePickers.propTypes = {
  mode: React.PropTypes.oneOf(['date', 'time', 'datetime']),
}
