import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'


const styles = makeStyles((theme:any) => ({
  borderBox: {
    borderRadius: 17,
    border: '1px solid rgba(210, 210, 210, 0.5)',
    paddingLeft: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingRight: '10%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      border: 'inherit',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))

function Box(props:any) {
  const {children} = props
  const classes = styles()

  return(
    <Grid className={classes.borderBox}>
      {children}
    </Grid>
  )
}

export default Box
