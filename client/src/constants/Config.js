export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title:'Loading...',
        message: 'Data is being loaded,wait for few minutes'
    },
    success: {
        title:'Success',
        message:'Data is successfully loaded...'
    },
    responseFailure: {
        title:'Error',
        message:'An error occured please try again later...'
    },
    requestFailure: {
        title: 'Error',
        message:'an error occured while parsing request data'

    },
    networkError:{
        title:'error',
        message:'Unable to connect .please check internet connection.'
    }


}

export const SERVICE_URLS = {
    userSignup : {url: '/signup', method:'POST'},
    userLogin : {url:'/login', method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'create', method:'POST'},
    getAllPosts:{url:'/posts', method:"GET", params: true},
    getPostById:{url:'post', method:'GET', query:true},
    updatePost:{url:'update', method:'PUT', query:true },
    deletePost:{url:'delete', method:'DELETE',  query:true},
    newComment:{url:'/comment/new', method:'POST'},
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    
  
}