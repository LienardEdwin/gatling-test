import React from 'react'
import Bar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {useRouter} from 'next/router'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    textTransform: 'initial',
    color: '#3f51b5',
    backgroundColor: 'white',
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}))


function AppBar(props:any) {
  const classes = useStyles()
  const router = useRouter()
  const {title} = props

  const handleClick = (e:any) => {
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
            <Typography>Accueil</Typography>
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
