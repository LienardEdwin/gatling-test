import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(() => ({
  root: {
    width: 345,
  },
}))

function UserPost(props:any) {
  const {post} = props
  const classes = useStyles()

  return(
    <Card className={classes.root}>
      <CardHeader
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserPost
