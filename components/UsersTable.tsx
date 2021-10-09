import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import UserCard from './UserCard/UserCard'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from './AppBar/AppBar'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    width: '100%',
  },
}))

type User = {
  id: number,
  name: string,
  username: string,
  address: {suite: ''}
}

const UsersTable: FunctionComponent = () => {
  const classes = useStyles()
  const [users, setUsers] = useState<User[]>([])
  const [nbApt, setNbApt] = useState(0)
  const [nbSuit, setNbSuit] = useState(0)

  const calcul = () => {
    let apt = 0
    let suite = 0
    let arrayAddress = users.map(item => { return item.address.suite })
    arrayAddress.map(item => {
      if(item.includes('Suite')) {
        suite = suite + 1
      }
      else{
        apt = apt + 1
      }
    })
    setNbApt(apt)
    setNbSuit(suite)
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  useEffect(() => {
    calcul()
  }, [users])

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xl={12} lg={12}>
        <AppBar title={'Users list'}/>
      </Grid>
      <Grid item xl={12} lg={12}>
        <Typography>Users in Appt : {nbApt}</Typography>
        <Typography>Users in Suite : {nbSuit}</Typography>
      </Grid>
      {
        users ?
          users.map(res => (
            <Grid container justifyContent={'center'} item xl={3} lg={3} md={3} sm={3} xs={3} key={res.id}>
              <UserCard data={res}/>
            </Grid>
          )) :
          <CircularProgress />
      }
    </Grid>

  )
}

export default UsersTable
