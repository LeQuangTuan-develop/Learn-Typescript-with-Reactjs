import { useState, ChangeEvent, useEffect, useContext } from 'react'
import {
    Toolbar,
    AppBar,
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Button,
    Chip,
} from '@material-ui/core'
import WelcomeMessage from './WelcomeMessage'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ProgressContext } from '../contexts/ProgressContext'
import { ThemeContext } from '../contexts/ThemeContext'
import Login from './Login'
import { AuthContext } from '../contexts/AuthContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        positionSelect: {
            color: 'white',
            borderBottom: '1px solid white',
        },
    })
)

const Navbar = () => {
    const classes = useStyles()

    const { lasttime, status } = useContext(ProgressContext)
    const { theme } = useContext(ThemeContext)
    const {
        authInfo: { isAuthenticated },
        toggleAuth,
    } = useContext(AuthContext)

    const [position, setPosition] = useState<string>('fullstack developer')
    const [time, setTime] = useState<Date>(() => new Date(Date.now()))
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const onPosionChange = (
        event: ChangeEvent<{
            value: unknown
        }>
    ) => setPosition(event.target.value as string)

    const handleOpenDialog = () => setIsLogin(true)

    const handleCloseDialog = () => setIsLogin(false)

    const handleLogout = () => {
        toggleAuth('')
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(() => new Date(Date.now()))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={1}
                    py={2}
                >
                    <Typography variant="h6">My movies</Typography>
                    <Box text-align="center">
                        <WelcomeMessage position={position} />
                        <Chip
                            label={`the last time working on this project: ${lasttime} - Status: ${status}`}
                        />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={position}
                                    onChange={onPosionChange}
                                    className={classes.positionSelect}
                                >
                                    <MenuItem value="fullstack developer">
                                        fullstack developer
                                    </MenuItem>
                                    <MenuItem value="frontend developer">
                                        frontend developer
                                    </MenuItem>
                                    <MenuItem value="backend developer">
                                        backend developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        <Box my={1}>
                            <Typography variant="h6">
                                {time.toUTCString()}
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            onClick={
                                isAuthenticated
                                    ? handleLogout
                                    : handleOpenDialog
                            }
                        >
                            {isAuthenticated ? 'Logout' : 'Login'}
                        </Button>
                    </Box>
                    <Login open={isLogin} handleClose={handleCloseDialog} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
