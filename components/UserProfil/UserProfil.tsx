import React, {useEffect, useState} from 'react'
import {TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
}))

type Props = {
  userInfo: {
    id: string,
    name: string,
    username: string,
    phone: string,
    email: string,
    website: string
  }
}

export default function UserProfil(props:Props) {
  const {userInfo} = props
  const [newName, setNewName] = useState('')
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    setNewName(userInfo.name)
  }, [userInfo])

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const updateName = () => {
    axios.patch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}`, {name: newName}).then(
      () => {
        setOpen(true)
      },
    ).catch(err => console.error(err))
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  return(
    <>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
          <TextField classes={{root: classes.textField}} variant={'outlined'} label={'Name'} value={newName} InputLabelProps={{shrink: true}} onChange={handleChange}/>
        </Grid>
        <Grid container item xl={6} lg={6} md={6} sm={6} xs={6} alignItems={'center'}>
          <Button variant={'contained'} color={'primary'} onClick={updateName}>Save</Button>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <TextField classes={{root: classes.textField}} variant={'outlined'} label={'UserName'} value={userInfo.username} InputLabelProps={{shrink: true}}/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <TextField classes={{root: classes.textField}} variant={'outlined'} label={'Phone'} value={userInfo.phone} InputLabelProps={{shrink: true}}/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <TextField classes={{root: classes.textField}} variant={'outlined'} label={'Email'} value={userInfo.email} InputLabelProps={{shrink: true}}/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <TextField classes={{root: classes.textField}} variant={'outlined'} label={'Website'} value={userInfo.website} InputLabelProps={{shrink: true}}/>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Name Update
        </Alert>
      </Snackbar>
    </>
  )
}

