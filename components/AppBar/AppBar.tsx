import React from 'react'
import Bar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

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
  const {title} = props

  return(
    <>
      <Bar position="static">
        <Toolbar variant="dense">
          <a href={'/'}>
            <Button
              variant="contained"
              classes={{root: classes.button}}
            >
              Home
            </Button>
          </a>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </Bar>
    </>
  )
}
export default AppBar
