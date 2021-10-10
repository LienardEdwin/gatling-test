import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import AppBar from '../components/AppBar/AppBar'
import Grid from '@material-ui/core/Grid'
import UserProfil from '../components/UserProfil/UserProfil'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    width: '100%',
  },
}))

type UserType = {
  id: string,
  name: string,
  username: string,
  phone: string,
  email: string,
  website: string
}


function profilPage(props:UserType) {
  const router = useRouter()
  const {id} = router.query
  const [user, setUser] = useState<UserType>(props)
  const classes = useStyles()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const url = `https://jsonplaceholder.typicode.com/users?id=${id}`
    axios.get(url).then(res => {
      let data = res.data
      data.map((res:any) => {
        setUser(res)
        setLoading(false)
      })
    }).catch(err => console.error(err))
  }, [])

  return(
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <AppBar title={user.name}/>
        </Grid>
        {
          loading ?
            <CircularProgress style={{position: 'absolute', right: '50%', top: '50%'}} />
            :
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <UserProfil userInfo={user}/>
            </Grid>
        }
      </Grid>
    </>
  )
}

export default profilPage
