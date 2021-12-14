import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@material-ui/core'
import { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

interface LoginProps {
    open: boolean
    handleClose: () => void
}

const Login = ({ open, handleClose }: LoginProps) => {
    const [username, setUsername] = useState('')
    const { toggleAuth } = useContext(AuthContext)

    const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const onLoginSubmit = () => {
        toggleAuth(username)
        setUsername('')
        handleClose()
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <TextField
                    label="username"
                    onChange={onUsernameChange}
                    value={username}
                    required
                />
            </DialogContent>
            <DialogActions>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={onLoginSubmit}
                    disabled={username === ''}
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login
