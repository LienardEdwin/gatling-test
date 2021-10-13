import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Grid from '@material-ui/core/Grid'
import UserPost from '../components/UserPost/UserPost'
import AppBar from '../components/AppBar/AppBar'
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(() => ({
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const requestOne = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    const requestTwo = axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses: any) => {
      const responseOne = responses[0].data
      const responseTwo = responses[1].data
      setPosts(responseOne)
      setUserName(responseTwo[0].name)
      setLoading(false)
    })).catch(errors => {
      console.error(errors)
    })
  }, [id])

  return(
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <AppBar title={userName}/>
        </Grid>
        {
          loading ?
            <CircularProgress style={{position: 'absolute', right: '50%', top: '50%'}} />
            :
            posts.map((res, index) => (
              <Grid container item md={3} sm={6} xs={12} key={index} justifyContent={'center'}>
                <UserPost post={res}/>
              </Grid>
            ))
        }

      </Grid>
    </>
  )
}

export default postPage
