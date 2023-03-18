import React from 'react'
import { Box , styled, FormControl, InputBase, Button, TextareaAutosize} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState, useEffect, useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/Api';
const Container = styled(Box)(({ theme}) => ({

    margin:'50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0,
    }
}));
const Image = styled('img')({
    width:'100%',
    height:'50vh',
    objectFit:'cover'

})

const StyledFormControl = styled(FormControl)`
margin-top:10px;
display:flex;
flex-direction:row;
`;

const InputTextField =  styled(InputBase)`
flex:1;
margin: 0 30px;
font-size:25px;

`;

const Textarea = styled(TextareaAutosize)`
width:100%;
margin-top:50px;
font-size:18px;
border:none;
&:focus-visible {
    outline:none;
}

`;

const initialPost = {
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createdDate:new Date()

}

const CreatePost = () => {
    
const[post,setPost] =  useState(initialPost);
const [file,setFile]= useState('');

const {account} = useContext(DataContext);

const location = useLocation();
const navigate = useNavigate();



const url = post.picture ? post.picture : 'https://c0.wallpaperflare.com/preview/101/814/342/aerial-background-beverage-blog.jpg'

useEffect (()=> {

    const getImage= async()=> {
        if(file){
            const data = new FormData();
            data.append("name", file.name);
            data.append("file",file);

           const response =  await API.uploadFile(data); 
            post.picture = response.data;

        }


    }
    getImage();
    post.categories = location.search?.split('=')[1] || 'All';
    post.username = account.username;

}, [file])



const handleChange = (e) => {
    setPost({...post, [e.target.name]:e.target.value});
}

const createPost = async() => {
   let response = await API.createPost(post);
    navigate('/');
  
}


    return (
   <>
   <Container>
    <Image src={url} alt="banner"/>
    <StyledFormControl>
        <label htmlFor='fileInput'>
            <AddCircleIcon fontsize='large' color='action'/>
        </label>
        <input type='file'
        id="fileInput"
        style={{display:'none'}}
        onChange={(e) => setFile(e.target.files[0])}
        />

        <InputTextField placeholder='Title' onChange={(e)=> handleChange(e)} name="title"/>
        <Button   onClick={() => createPost()} variant="contained" >Publish</Button>
    </StyledFormControl>

    <Textarea
        rowsMin={5}
        placeholder="Write Your Blog..."
        onChange={(e)=> handleChange(e)}
        name="description"
       
    />
   </Container>
   </>
  )
}

export default CreatePost;