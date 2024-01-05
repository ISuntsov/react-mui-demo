import React, { useState } from 'react'
import { Stack, TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const MuiTextField = () => {
  const [value, setValue] = useState('')
  const [showPass, setShowPass] = useState(false)

	const clickShowPass = () => setShowPass((show) => !show);

	const mouseDownPass = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField
          label='Form Input'
          required
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
          type={showPass ? 'text' : 'password'}
          error={!value}
          value={value}
          onChange={handleChange}
					InputProps={{
            endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									onClick={clickShowPass}
									onMouseDown={mouseDownPass}
								>
									{showPass ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						)
          }}
        />
      </Stack>
      <Stack spacing={2} direction='row'>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}
