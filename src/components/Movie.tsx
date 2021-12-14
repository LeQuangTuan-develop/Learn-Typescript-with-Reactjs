import { Box, Button, TextField, Chip, PropTypes } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { ThemeContext } from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px',
        },
        movieChip: {
            fontSize: '2rem',
            padding: '30px 10px',
            margin: '5px',
        },
    })
)

const Movie = () => {
    const classes = useStyles()

    const [movie, setMovie] = useState<string>('')
    const { movies, addMovie, deleteMovie } = useContext(MovieContext)
    const { theme } = useContext(ThemeContext)
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>

    const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        setMovie(event.target.value)

    const handleAddMovie = () => {
        addMovie(movie as string)
        setMovie('')
    }

    const handleDeleteMovie = (movieId: string) => {
        deleteMovie(movieId)
    }

    return (
        <>
            <Box display="flex" justifyContent="center" my={5}>
                <TextField
                    label="Your favorite movie ..."
                    variant="outlined"
                    className={classes.movieInput}
                    onChange={onMovieInputChange}
                    value={movie}
                />
                <Button variant="contained" color="primary" onClick={handleAddMovie}>
                    Add
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
                {movies.map((movie) => (
                    <Chip
                        key={movie.id}
                        label={movie.title}
                        clickable
                        color={chipTheme}
                        className={classes.movieChip}
                        onDelete={() => handleDeleteMovie(movie.id)}
                    />
                ))}
            </Box>
        </>
    )
}

export default Movie
