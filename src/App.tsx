import { Grid } from '@material-ui/core'
import './App.css'
import Movie from './components/Movie'
import Navbar from './components/Navbar'
import ToggleThemeButton from './components/ToggleThemeButton'
import TopMovies from './components/TopMovies'
import AuthContextProvider from './contexts/AuthContext'
import MovieContextProvider from './contexts/MovieContext'
import ProgressContextProvider from './contexts/ProgressContext'
import ThemeContextProvider from './contexts/ThemeContext'
import TopMovieContextProvider from './contexts/TopMovieContext'

function App() {
    return (
        <TopMovieContextProvider>
            <AuthContextProvider>
                <MovieContextProvider>
                    <ThemeContextProvider>
                        <ProgressContextProvider>
                            <Navbar />
                            <Grid container>
                                <Grid item xs={4}>
                                    <TopMovies />
                                </Grid>
                                <Grid item xs={8}>
                                    <Movie />
                                </Grid>
                            </Grid>
                            <ToggleThemeButton />
                        </ProgressContextProvider>
                    </ThemeContextProvider>
                </MovieContextProvider>
            </AuthContextProvider>
        </TopMovieContextProvider>
    )
}

export default App
