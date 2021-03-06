import React, {MouseEvent} from 'react'
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
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  button: {
    fontWeight: 'bold',
  },
})

type Props = {
  data:{
    id: number,
    name: string,
    email: string
  }
}

export default function UserCard(props:Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const classes = useStyles()
  const open = Boolean(anchorEl)
  const {data} = props

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar">
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
              <Link href={`profil?id=${data.id}`}>
                <a>
                  <MenuItem key={0}>
                    Show Profil
                  </MenuItem>
                </a>
              </Link>

            </Menu>
          </>
        }
        title={data.name}
        subheader={data.email}
      />
      <CardActions>
        <Link href={`post?id=${data.id}`}>
          <a>
            <Button variant={'contained'} classes={{root: classes.button}} size="small" color="primary">All post</Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  )
}
