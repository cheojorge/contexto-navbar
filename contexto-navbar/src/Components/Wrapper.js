import React from 'react'
import { NameProvide } from '../Context/NameContext'



export const Wrapper = ({children}) => {
    
    return (
       <NameProvide>
           {children}
       </NameProvide>
    )
}
