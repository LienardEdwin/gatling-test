import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import UserCard from './UserCard/UserCard'
import {makeStyles, Theme} from '@material-ui/core/styles'
import AppBar from './AppBar/AppBar'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    width: '100%',
  },
}))

type User = {
    id: number,
    name: string,
    username: string
}

const UsersTable: FunctionComponent = () => {
  const classes = useStyles()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xl={12} lg={12}>
        <AppBar title={'Liste des utilisateurs'}/>
      </Grid>
      {
        users.map(res => (
          <Grid container justifyContent={'center'} item xl={3} lg={3} md={3} sm={3} xs={3} key={res.id}>
            <UserCard data={res}/>
          </Grid>
        ))
      }

    </Grid>

  )
}

export default UsersTable
