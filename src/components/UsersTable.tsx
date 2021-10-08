import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";
import Grid from '@mui/material/Grid';
import Card from '../components/Card/Card'

type User = {
    id: number,
    name: string,
    username: string
}

const UsersTable: FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then(response => {
                setUsers(response.data)
            });
    }, []);

    return (
        <Grid container>
            {
                users.map( res => (
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={4} key={res.id}>
                        <Card data={res}/>
                    </Grid>
                ))
            }

        </Grid>

    )
}

export default UsersTable;
