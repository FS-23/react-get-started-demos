
import React from 'react'

/***** class component ****/

class Contact extends React.Component{
 
    constructor(){
        super()
        console.log('creating contact component')
    }
    
    componentDidMount(){
        console.log('Contact component mounted 😍')
    }
    componentDidUpdate(){
        console.log('Contact components updated !!!')
    }

    componentWillUnmount(){
        console.log('Conatact component will unmount !!!')
    }
    render(){
        console.log('Rendering contact component....')
        return (
            <h2>Welcome to contact component</h2>
        )
    }
}

export default Contact