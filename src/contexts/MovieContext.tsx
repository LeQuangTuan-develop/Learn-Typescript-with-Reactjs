import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Movie {
    id: string
    title: string
}

interface MovieContextDefault {
    movies: Movie[]
    addMovie: (title: string) => void
    deleteMovie: (id: string) => void
}

interface MovieContextProps {
    children: ReactNode
}

const MovieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {},
}

export const MovieContext = createContext<MovieContextDefault>(MovieContextDefaultData)

const MovieContextProvider = ({ children }: MovieContextProps) => {
    const [movies, setMovies] = useState<Movie[]>(MovieContextDefaultData.movies)

    const addMovie = (title: string) =>
        setMovies((prevState) => [...prevState, { title, id: uuidv4() }])

    const deleteMovie = (id: string) =>
        setMovies((prevState) => prevState.filter((m) => m.id !== id))

    const MovieContextData = { movies, addMovie, deleteMovie }

    return (
        <MovieContext.Provider value={MovieContextData}>{children}</MovieContext.Provider>
    )
}

export default MovieContextProvider
