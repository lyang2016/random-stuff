import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Person } from '@mui/icons-material'
import router from 'next/router'
import { Stack, Typography } from '@mui/material'

const LoggedInUserMenu = ({ onLogOut }: { onLogOut: () => void }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleClose()
    onLogOut()
  }

  return (
    <>
      <Typography variant='body2' sx={{ paddingTop: 1 }}></Typography>
      <Button id='basic-button' variant='text' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        <Person />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem
          onClick={() => {
            handleClose()
            router.push('/protected')
          }}>
          profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>sign out</MenuItem>
      </Menu>
    </>
  )
}
export default LoggedInUserMenu
