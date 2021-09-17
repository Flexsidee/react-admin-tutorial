import React from 'react';
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/styles';
import LauncIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    }
})

const MyUrlField = ({source}) => {
    const record = useRecordContext();
    const classes = useStyles();
    return record ? (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LauncIcon className={classes.icon} />
        </a>
    ) : null;
}

export default MyUrlField;
