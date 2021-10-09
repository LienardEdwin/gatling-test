import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import {useRouter} from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  button: {
    fontWeight: 'bold',
  },
})

export default function UserCard({data}:any) {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const router = useRouter()
  const open = Boolean(anchorEl)

  const showPost = (e:any) => {
    e.preventDefault()
    router.push(`post?id=${data.id}`)
  }

  const handleOpenMenu = (event:any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const showProfil = (e:any) => {
    e.preventDefault()
    router.push(`profil?id=${data.id}`)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {data.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '20ch',
                },
              }}
            >
              <MenuItem key={0} onClick={showProfil}>
                Show Profil
              </MenuItem>
            </Menu>
          </>
        }
        title={data.name}
        subheader={data.email}
      />
      <CardActions>
        <Button variant={'contained'} classes={{root: classes.button}} size="small" color="primary" onClick={showPost}>All post</Button>
      </CardActions>
    </Card>
  )
}
