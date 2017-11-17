import React from 'react';
import { Card, Button, Input, Row, Icon} from 'react-materialize';

const showUser = (props) => {
  return(
    <div>
      {
        props.users.map( (user, i) => {
          return(
            <div key={i}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card small">
                    <div className="card-content">
                      <span className="card-title">User Details</span>
                      <Row>
                        <Input value={user.name} disabled s={6}>
                            <Icon>account_circle</Icon>
                        </Input>
                        <Input value={user.doj} disabled s={4}>
                            <Icon>date_range</Icon>
                        </Input>
                        <Input value={user.email} disabled s={6}>
                            <Icon>email</Icon>
                        </Input>
                        <Input value={user.active} disabled s={6}>
                            <Icon>account_circle</Icon>
                        </Input>
                      </Row>
                    </div>
                    <div className="card-action right-align">
                      <Button
                        className='btn-floating btn-small red' waves='light'
                        onClick={(event) => { props.deleteUser(i) }}
                        icon='delete'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default showUser;
