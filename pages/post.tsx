import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Grid from '@material-ui/core/Grid'
import UserPost from '../components/UserPost/UserPost'
import AppBar from '../components/AppBar/AppBar'
import {makeStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    width: '100%',
  },
}))

function postPage() {
  const classes = useStyles()
  const router = useRouter()
  const {id} = router.query
  const [posts, setPosts] = useState([])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    axios.get(url).then(res => {
      setPosts(res.data)
    }).catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users?id=${id}`
    axios.get(url).then(res => {
      let userInfo = res.data
      setUserName(userInfo[0].name)
    }).catch(err => console.error(err))
  }, [])

  return(
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xl={12} lg={12}>
          <AppBar title={userName}/>
        </Grid>
        {
          posts.map((res, index) => (
            <Grid container item xl={3} lg={3} key={index} justifyContent={'center'}>
              <UserPost post={res}/>
            </Grid>
          ))
        }

      </Grid>
    </>
  )
}

export default postPage
