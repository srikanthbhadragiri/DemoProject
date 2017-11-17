import React from 'react';
import { Button, Icon, Breadcrumb, MenuItem, Input, Row, Navbar, NavItem } from 'react-materialize';

const AddUser = (props) => {
  let newUserName = '';
  let newUserEmail = '';
  let newUserDoj = '';
  let newUserActive = '';

  const sendDataToParent = (event) => {
    console.log(newUserDoj);
    console.log(newUserActive);
    if(newUserName.length > 0 && newUserEmail.length >0){
      props.addNewUser({
        name:newUserName,
        email:newUserEmail,
        doj:newUserDoj,
        active:newUserActive
      });
    }else{
      console.log('preventDefault');
      event.preventDefault();
    }
  };

  return(
    <div>
			<Navbar brand='Add / Edit / Delete Form' right>
				<NavItem href='/'>Home</NavItem>
			</Navbar>
      <br/>
      <Row>
					<Input
            placeholder="Enter Name" s={7}
            label="Name"
            onChange={ (event) => newUserName = event.target.value}>
              <Icon>account_circle</Icon>
          </Input>
          <Input s={5}
            label="Date of Joining" name='on' type='date'
            onChange={ (event) => newUserDoj = event.target.value}>
              <Icon>date_range</Icon>
          </Input>
					<Input
            placeholder="Enter Email" s={12}
            label="Email"
            onChange={ (event) => newUserEmail = event.target.value}>
              <Icon>email</Icon>
          </Input>
          <Input name='active' s={6}
            type='checkbox'
            value='active'
            label='Is User Active'
            placeholder="Select"
            onChange={(event) => newUserActive = event.target.value}>
          </Input>
			</Row>
      <div className='center-align'>
        <Button
          floating large className='red'
          waves='light'
          onClick={sendDataToParent} icon='add'/>
        <Button
          floating large className='blue'
          waves='light'
          icon='refresh' />
      </div>
    </div>
  );
};

export default AddUser;
