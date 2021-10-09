import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Grid from '@material-ui/core/Grid'
import UserPost from '../components/UserPost/UserPost'

function post() {
  const router = useRouter()
  const {id} = router.query
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    axios.get(url).then(res => {
      setPosts(res.data)
    }).catch(err => console.log(err))
  }, [])

  return(
    <Grid container spacing={2}>
      {
        posts.map((res, index) => (
          <Grid item xl={3} lg={3} key={index}>
            <UserPost post={res}/>
          </Grid>
        ))
      }

    </Grid>
  )
}

export default post
