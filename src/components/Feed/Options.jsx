import React,{useState} from 'react'
import styled from 'styled-components'
import Separator from '../Shared/Separator'

export const Options = () => {
    const [selected, setSelected] = useState("For you")

    const Container = styled.div`
     display:block;
     width:100%;
     padding:20px 0px;
     
     @media (max-width: 768px) {
    padding: 0px 0px;
   
  }
       div{
       display:flex;
       gap:60px;
       }

  
  }
        
      
    `

    return (
        <Container>
            <div>
                <div>
                    <p>For you</p>
                </div>
                <div>
                    <p>Featured</p>
                </div>
            </div>
            <Separator />

        </Container>
    )
}
