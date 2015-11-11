import React from 'react';
import Relay from 'react-relay';
import {BernieText} from './styles/bernie-css';
import moment from 'moment';

export class GroupCall extends React.Component {
  render() {
    return (
      <div>
        <div style={BernieText.title}>
          {this.props.groupCall.name}
        </div>
        <div>
          <div>{moment(this.props.groupCall.scheduledTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}
          </div>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(GroupCall, {
  fragments: {
    groupCall: () => Relay.QL`
      fragment on GroupCall {
        id
        name
        scheduledTime
      }
    `
  }
});