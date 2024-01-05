import { Box, Stack, Grid, Paper, Divider } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={2}>
      <Stack
				border='1px solid'
				spacing={2}
				direction='row'
				divider={<Divider orientation='vertical' flexItem />}
			>
        <Box
          component='div'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '30px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
							cursor: 'pointer',
            }
          }}>
          Codevolution
        </Box>
        <Box
					component='span'
          display='flex'
          height='30px'
          width='100px'
          bgcolor='success.light'
          p={2}>
				</Box>
      </Stack>
      <Grid rowSpacing={2} columnSpacing={1} container my={2}>
        <Grid item xs>
          <Box p={2} bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='secondary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid item xs="auto">
          <Box p={2} bgcolor='primary.dark'>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box p={2} bgcolor='secondary.dark'>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
