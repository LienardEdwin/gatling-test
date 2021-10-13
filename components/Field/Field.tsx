import React from 'react'
import {TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
}))

type Props = {
  label: string,
  value: string,
  onChange?:(val: any) => void
}

function Field(props:Props) {
  const {label, value, onChange} = props
  const classes = useStyles()

  return(
    <TextField classes={{root: classes.textField}} onChange={onChange} variant={'outlined'} label={label} value={value} InputLabelProps={{shrink: true}}/>
  )
}

export default Field
