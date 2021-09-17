import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/Users';
import {PostList, PostEdit, PostCreate} from './components/Posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './components/Dashboard';
import authProvider from './auth/authProvider';

const dataProvider=jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () =>(
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
)

export default App;