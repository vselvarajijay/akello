import {SignIn} from '@akello/react'
import { useNavigate } from 'react-router'


const AkelloSignIn = () => {
    const navigate = useNavigate()
    
     
    return (
        <>
            <SignIn onSuccess={(token: string) => {                    
                    navigate('/')
                }} onFail={(err: string) => {
                    console.log(err)                    
                }}/>
        </>
    )
}

export default AkelloSignIn