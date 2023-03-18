import React from 'react'
import {Box, TextField , styled, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { useState , useContext } from 'react';
import { API } from '../../service/Api.js';
import { DataContext } from '../../context/DataProvider.js';
import { useNavigate } from 'react-router-dom';


const Component = styled(Box)`
width:400px;
margin:auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width:'360px',
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
    
})

const Wrapper = styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction: column;
`

const LoginButton = styled(Button)`
text-transform:none;
height:48px;
border-radius:2px;
background:hotpink;
color:black



`

const Error = styled(Typography) `
font-size:10px;
color:red;
line-height:0;
margin-top:10px;
font-weight:600;
`
const SignupButton = styled(Button)`
text-transform:none;
height:48px;
border-radius:2px;
background:#fff;
color:#2874f0;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);


`
const loginInitialValues = {
    username:'',
    password:'',
}
const signupInitialValues = {
    name:'',
username:'',
password:'',

}


const Login = ({ isUserAuthenticated}) => {
    const imageURL= 'https://theblogcreative.com/wp-content/uploads/2017/11/THE-BLOG-CREATIVE-HOMEPAGE-12.png';

const [account,setAccount] = useState('login');
const [signup,setSignUp] = useState(signupInitialValues);
const [login,setLogin]=useState(loginInitialValues);
const [error,setError]= useState('');

const  {toggleAccount} = useContext(DataContext);
const navigate = useNavigate();

const setSigunup = () => {
    account === 'signup' ? setAccount('login'): setAccount('signup');
}

const onInputChange= (e)=> {
    setSignUp({ ...signup,[ e.target.name]: e.target.value})
}

const signupUser = async ()=> {
     let response = await API.userSignup(signup);
     if(response.isSuccess){
        setError('');
        setSignUp(signupInitialValues);
        setAccount('login')
     }else{
        setError('Something went wrong,please try again later')

     }
}

const onValueChange = (e) => {
setLogin({...login, [e.target.name]: e.target.value})
}

const loginUser = async() => {
  let response= await API.userLogin(login);
  if(response.isSuccess){
    setError('');

    sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
    sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);


    toggleAccount({username: response.data.username, name: response.data.name});

    isUserAuthenticated(true);

    navigate('/');
    

  }else{
    setError('Something went wrong')
  }
}



  return (
    <>
    <Component>
        <Box>
        <Image src={imageURL} alt='login'/>

        {
            account === 'login' ?
        
         <Wrapper >
        <TextField variant='standard'value={login.username} onChange={(e)=>onValueChange(e)} name="username" label='Enter Username'/>
        <TextField variant='standard' value={login.password} onChange={(e)=>onValueChange(e)} name="password" label='Enter Password'/>

        {error && <Error>{error}</Error>}
<LoginButton variant="contained" style={{marginTop:'30px'}} onClick={()=>loginUser()}>Login</LoginButton>
<Typography style={{marginTop:'20px', textAlign:'center', color:'#878787', fontSize:'15px'}}>OR</Typography>
      <SignupButton onClick={() => setSigunup()}>Create An Account</SignupButton>
     
      </Wrapper> 
:

<Wrapper >
<TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label='Enter Name'/>
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='password'label='Enter Password'/>

        {error && <Error>{error}</Error>}

<SignupButton  style={{marginTop:'30px'}} onClick={()=> signupUser ()} >Signup</SignupButton>
<Typography style={{marginTop:'20px', textAlign:'center', color:'#878787', fontSize:'15px'}}>OR</Typography>
      <LoginButton variant='contained' onClick={() => setSigunup()}>Already have an account</LoginButton>
     
      </Wrapper>
}
      </Box>
 

    </Component>
    
    
    </>
  )
}

export default Login