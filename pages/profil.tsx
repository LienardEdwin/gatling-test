import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import AppBar from '../components/AppBar/AppBar'
import Grid from '@material-ui/core/Grid'
import UserProfil from '../components/UserProfil/UserProfil'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    width: '100%',
  },
}))

function profilPage() {
  const router = useRouter()
  const {id} = router.query
  const [user, setUser] = useState({
    name: '',
  })
  const classes = useStyles()


  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users?id=${id}`
    axios.get(url).then(res => {
      let data = res.data
      data.map((res:any) => {
        setUser(res)
      })
    }).catch(err => console.error(err))
  }, [])

  return(
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <AppBar title={user.name}/>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <UserProfil userInfo={user}/>
        </Grid>
      </Grid>
    </>
  )
}

export default profilPage
