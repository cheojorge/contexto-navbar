import React, { useContext } from 'react'
import { NameContext } from '../Context/NameContext'

export const Form = () => {
    const {setName} = useContext(NameContext)
    return (
        <form>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Your Name: </label>
                <div className="col-sm-10">
                    <input type="email" className="form-control bg-light" id="inputEmail3" onChange={(e)=> setName(e.target.value)}/>
                </div>
            </div>
        </form>
    )
}
