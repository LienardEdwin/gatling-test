import React, {FunctionComponent, useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Card from './Card/Card'

type User = {
    id: number,
    name: string,
    username: string
}

const UsersTable: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url)
      .then(response => {
        setUsers(response.data)
      })
  }, [])

  return (
    <Grid container spacing={2}>
      {
        users.map(res => (
          <Grid item xl={3} lg={3} md={3} sm={3} xs={3} key={res.id}>
            <Card data={res}/>
          </Grid>
        ))
      }

    </Grid>

  )
}

export default UsersTable
