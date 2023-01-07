
import { useEffect,useState } from "react";
import axios from "axios";
import {Grid,GridItem,Button} from "@chakra-ui/react";
const All=()=>{
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const[total,setTotal]=useState(0);
    const[loading,setLoading]=useState(false);

const getData=async()=>{
    setLoading(true);
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&per_page=10&page=${page}`);
        console.log(response.data);
        setTotal(response.data.toal_count);
        setData(response.data.items)
        setLoading(false)
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
}


useEffect(()=>{
getData();
},[page])







   return loading?<h1 style={{textAlign:"center"}}>Loading...</h1>:(
    <div >
        <Grid   m="auto" mt="5" justifyContent="center"   templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap="4">

     {
        data.map((el)=>(
            <GridItem m="auto" key={el.id} border="1px solid black" h="220px" w="220px">
               <p>Repo name: {el.name}</p>
                <p>Language: {el.language}</p>
                <p>Stars count : {el.stargazers_count}</p>
                forks
          <p>Forks : {el.forks}</p>
                <p>Forks_Count{el.forks_count}</p>
            </GridItem>
        ))
     }
        </Grid>

       <Button disabled={page===1} onClick={()=>{setPage(page-1)}} size="lg" bg="teal" color="white" _hover={{bg:"red"}}>-</Button><Button size="lg" bg="yellow">{page}</Button><Button onClick={()=>{setPage(page+1)}} size="lg" bg="teal" color="white" disabled={page===total} _hover={{bg:"red"}}>+</Button>
        </div>
    )
}
export default All;