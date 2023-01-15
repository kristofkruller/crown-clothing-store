import SignIn from './SignIn'
import SignUp from './SignUp'
import styled from 'styled-components'

const AuthWrap = styled.section`
    display: flex;
    justify-content: space-around;
`

const Auth = () => {
  return (
    <AuthWrap>
        <SignIn />
        <SignUp />
    </AuthWrap>
  )
}

export default Auth