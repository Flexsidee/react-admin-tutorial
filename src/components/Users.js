import React from 'react';
import { List, Datagrid, TextField, EmailField, SimpleList} from 'react-admin';
import MyUrlField from './MyUrlField';
import { useMediaQuery } from '@material-ui/core';

const UserList = props => {
    const isSmall = useMediaQuery(device => device.breakpoints.down('sm'));

    return(
        <List {...props}>
            {isSmall ? (
                <SimpleList 
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                    tertiaryText={record => record.address.street}
                />
            ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.street" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
            )}
        </List>
    );
}

export default UserList;
