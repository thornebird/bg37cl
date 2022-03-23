import React from 'react'

const QuizPost =(props)=>{

    return( 
        <>
          Post quiz  {props.match.params.id}
        </>
    )
}

export default QuizPost