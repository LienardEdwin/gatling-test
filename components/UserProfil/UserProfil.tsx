import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import Field from '../Field/Field'

type Props = {
  userInfo: {
    id: number,
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
        <Grid item xs={6}>
          <Field label={'Name'} value={newName} onChange={handleChange}/>
        </Grid>
        <Grid container item xs={6} alignItems={'center'}>
          <Button variant={'contained'} color={'primary'} onClick={updateName}>Save</Button>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Field label={'UserName'} value={userInfo.username}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Field label={'Phone'} value={userInfo.phone}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Field label={'Email'} value={userInfo.email}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Field label={'Website'} value={userInfo.website}/>
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

