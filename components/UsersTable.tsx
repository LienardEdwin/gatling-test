import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import UserCard from './UserCard/UserCard'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from './AppBar/AppBar'
import Chip from '@material-ui/core/Chip'
import CircularProgress from '@material-ui/core/CircularProgress'
import Avatar from '@material-ui/core/Avatar'

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
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(response => {
        setUsers(response.data)
        setLoading(false)
      }).catch(err => console.error(err))
  }, [])

  useEffect(() => {
    calcul()
  }, [users])

  return (
    <>
      {
        loading ?
          <CircularProgress style={{position: 'absolute', right: '50%', top: '50%'}} />
          :
          <Grid container spacing={2} className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <AppBar title={'Users list'}/>
            </Grid>
            <Grid container spacing={2} item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.root}>
              <Grid item>
                <Chip avatar={<Avatar>{nbApt}</Avatar>} label="Appt" color={'primary'}/>
              </Grid>
              <Grid item>
                <Chip avatar={<Avatar>{nbSuit}</Avatar>} label="Suite" color={'primary'}/>
              </Grid>
            </Grid>
            {
              users.map(res => (
                <Grid container justifyContent={'center'} item xl={3} lg={3} md={4} sm={6} xs={12} key={res.id}>
                  <UserCard data={res}/>
                </Grid>
              ))
            }
          </Grid>
      }
    </>
  )
}

export default UsersTable
