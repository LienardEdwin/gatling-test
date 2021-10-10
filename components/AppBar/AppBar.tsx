import React, {MouseEvent} from 'react'
import Bar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {useRouter} from 'next/router'

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'initial',
    color: '#3f51b5',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}))

type Props = {
  title: string
}

function AppBar(props:Props) {
  const classes = useStyles()
  const router = useRouter()
  const {title} = props

  const handleClick = (e:MouseEvent) => {
    e.preventDefault()
    router.push('/')
  }

  return(
    <>
      <Bar position="static">
        <Toolbar variant="dense">
          <Button
            variant="contained"
            classes={{root: classes.button}}
            onClick={handleClick}
          >
            Home
          </Button>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </Bar>
    </>
  )
}
export default AppBar
