import React from 'react';
import { Menu, Icon, Image, Header } from 'semantic-ui-react';
import {Link, Router} from '../routes';

export default () => {
  return (
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>


    <Menu style = {{ marginTop: '12px' }} stackable pointing secondary>
    <Menu.Item name='home' active />
      <Menu.Item
        name='messages'
      />
      <Menu.Item
        name='friends'
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='logout'
        />
      </Menu.Menu>
    </Menu>
    </Header>
  );
};
