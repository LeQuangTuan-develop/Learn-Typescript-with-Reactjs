import { createContext, ReactNode } from 'react'

interface ProgressContextProviderProps {
    children: ReactNode
}

interface ProgressContextDefault {
    lasttime: string
    status: string
}

const progressDefault = {
    lasttime: '12/12/2021',
    status: 'In Progress',
}

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault)

const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => {
    return (
        <ProgressContext.Provider value={progressDefault}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContextProvider
