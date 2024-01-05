import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={5} direction='row'>
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} color='secondary' max={999}>
        <MailIcon />
      </Badge>
      <Badge color='secondary' variant='dot' invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
