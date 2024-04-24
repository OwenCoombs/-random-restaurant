import axios from 'axios'

function getApi() {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`)
      .then(response => {
        console.log(response)
        
        
    
        
      })
      .catch(error => {
        console.log('error', error)
  
      })
  }


  export default getApi