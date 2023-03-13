


import React ,{ useState,useEffect } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './rough.css'
import Box from '@mui/material/Box';
import logoImage from "../assets/images/logoicon.webp"

import {useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName,} from 'wagmi'





function Coins() {



  
  const { disconnect } = useDisconnect()





{/*
  const [number1, setNumber1] = useState();
  
  const [total, setTotal] = useState();
 

  function calculateTotal() {
    setTotal(number1 * 40000);
  }
*/}













 
  {/* state = {
    initialValue: 0,
    finalValue: initialValue* 10
  }

  
  
const alpha = (ev) => {
  this.setState({
          [ev.target.name]: ev.target.value
  });
 }

*/}


const [number, setNumber] = useState();
const [result, setResult] = useState();

useEffect(() => {
  setResult(number * 40000);
}, [number]);

const handleInputChange = (event) => {
  setNumber(event.target.value);
}





// const [text, setText] = useState({ total });

  const [text, setText] = useState({ result });
  











    return (
        <>
        
                    {/*   display="flex" justifyContent="space-between" alignItems="center"        */}
                          <Grid  container item xs={12} lg={12} mx="auto"   >
                
                          <Grid   item xs={12} xl={9} textAlign="center"   md={9}    style={{ backgroundColor:"black" ,border:"2px solid black"}}>
                            <Box  style={{display:"flex"}} textAlign="center"   p={1} mt={1}  >
                                <Box  pl={6}  textAlign="center" width={"100%"} style={{display:"flex"}}   > 
                                  <Box>
                  {/*    <img 
                                    style={{
                                            marginBottom:"0px",
                                           
                                          position: "relative",
                                          width: "40px",
                                          height:"25px"
                                            }}
                                      src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
                                          */}
                  
                                      <img  src ={logoImage}  style={{
                                            marginBottom:"0px",
                                           
                                          position: "relative",
                                          width: "40px",
                                          height:"25px"
                                            }} />
                                
                                  </Box>
                              
                                    <Box style={{paddingLeft:"5px"}}>
                                    <h5  style={{marginBottom:"0px", fontSize:"20px", color:"black", marginTop:"-2px",color:"white"}}  >InfinityVoid</h5>
                                    </Box>
                                  </Box> 
                              

                              </Box>
                                       
                          


                          </Grid>
  

          
         <Grid item    xl={3} xs={12} md={3}  style={{ backgroundColor:"black" }}  >
       <Box mt={1}  p={1}  style={{display:"flex",  }} >
  
              <Box   style={{ width:"40%" ,   }}>

              </Box>
   
        <Box    style={{ width:"30%" , marginTop:"-2px" }}  >           
  
  
  
               <button
                                style={{ 
                                    marginBottom:"0px",
               backgroundColor: "#DBE9FA",
               width:"80px",
               height:"30px",
               borderRadius: "20px",
               
               border:"none",
               color: "DodgerBlue",
               //padding: "12px 16px",
               fontSize: "12px",
               cursor: "pointer"}}
               onClick={disconnect}
          >
             Disconnect
  
                    </button>
  
            
        
        
        
           </Box>
               
  
                 
           <Box   style={{ width:"30%" ,  }}>

</Box>
  
     
              {/*
           <Box  style={{textAlign:"center", width:"50%",   margin:"4px"}}   >
                      <p   style={{paddingTop:"2px", marginBottom:"0px",marginTop:"0px", fontSize:"13px"}}> Activity  </p>
                     
                     </Box>    
               
   
   
   
   
   
   
                   <Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
                      <p   style={{paddingTop:"2px",marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> Explorer  </p>
                     
                     </Box>           
                   
   
   
   
   
   
     
                     <Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
                      <p   style={{paddingTop:"2px", marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> More  </p>
                     
                     </Box>    
   
   
   
                 
   
   
   
                    
                   <Box   style={{ width:"50%" }}>
                      
  
  
  
  
             <button
                                style={{ 
                                    marginBottom:"0px",
               backgroundColor: "#DBE9FA",
               width:"80px",
               height:"30px",
               borderRadius: "20px",
             
               border:"none",
               color: "DodgerBlue",
               //padding: "12px 16px",
               fontSize: "12px",
               cursor: "pointer"}}
           
             >
             Mainnet  
  
                    </button>
  
  
  
                     </Box>           
                   
   
                


                     <Box  style={{ width:"30%"}}>
                  </Box>


                                */}

                    
  
                    </Box>

                    </Grid>       
                               


           </Grid>
          
                                
            








           <Container>
          <Grid  item    xl={12} xs={12} lg={12} mx="auto"  mt={3}  mb={10}  >
           
                    

            <Box mb={10} style={{ backgroundColor: "#157DEC", borderRadius: "18px ",  width: "100%", height: "100%",  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>            
                            
                        <Box >
                              <Box textAlign="center" p={2}   >
                                <h1   style={{marginBottom:"0px", color:"white" ,color:"white"}} >Start a Trade</h1>
                              </Box>
               
                              <Box textAlign="center"  >
                                <p style={{fontSize:"20px", marginTop:"0px", color:"white", color:"white"}}  >Select the amounts for your trade.</p>
                              </Box>
                    
                        </Box>
            
                                    
            
                                    
                        




                            <Grid   container spacing={3} xs={12} lg={12} mx="auto" mt={7}      >
                     
                            
                                 {/* Left Box */}

                              <Grid container xs={12} md={5}   >
                  
                          
                              
                                  
                                <Grid container item  md={12} >
                                  
                                
 
                                      <Grid   item  xs={12}  xl={8}  md={7}>
                                      </Grid>  

                                      <Grid   item xs={12} xl={4} textAlign="center"   md={5}  >     
                                         <h5  style={{marginBottom:"0px", marginTop:"0px", fontSize:"25px", color:"white"}} >You'll send</h5>
                                     </Grid >                     
                                     
                              
          
          

                                   

                              
                                     <Grid  mt={1.5}   item   xs={12}  xl={6.5} md={6} >
                                      </Grid>  

                                      <Grid mt={1.5}  container item xs={12} xl={5.5}  alignItems="center"  justifyContent="center"  md={6} >     
                                      
                                             <p  style={{  marginRight:"10px", padding:"0px", marginBottom: "0px", marginTop: "0px", border: "none", fontSize: "40px" , color:"white" }} >ETH</p>    
                   
                      {/*        <input  className='indata'  value={number1}
          onChange={(e) => setNumber1(e.target.value)} placeholder="0.00" style={{marginTop:"5px",border: "none",  color: "#95B9C7", outline: "none", background: "transparent", width: "84px", fontSize: "38px" }} />
                              */}
                      
                    

                      <input className='indata'
                          value={number} onChange={handleInputChange}
                        
                        placeholder="0.00" style={{ marginTop: "5px", border: "none", color: "#95B9C7", outline: "none", background: "transparent", width: "84px", fontSize: "38px" }} />

    
                    
                    </Grid >                     
               
                                

{/*  <Grid    item style={{border:"2px solid black"}}  xs={12} textAlign="center"md={5.5}   xl={8}  >  */}
                                      <Grid    item  xs={12} textAlign="center"md={4.5}   xl={8}  >
                                       </Grid>  

                                      {/*   <Grid container item  md={6.5}  style={{border:"2px solid black"}} xs={12} xl={4} justifyContent="center"  textAlign="center" >      */}
                                        <Grid container item  md={7.5}  xs={12} xl={4} justifyContent="center"  textAlign="center" >     


                                       {/*   <Grid item pt={0.8}  pr={0.5}  style={{paddingBottom:"0px", marginBottom:"0px",border:"2px solid black"}}  >  */}
                                         <Grid item pt={0.8}  pr={0.5}  style={{paddingBottom:"0px", marginBottom:"0px"}}  >
                                           <h5  style={{marginBottom:"0px", marginTop:"0px",fontSize:"16px" ,color:"#95B9C7" }}> 1 ETH =</h5>
                                         </Grid>
                                   
                                     
                                    <Grid item pt={0.5} >
                        {/*  <Box pl={1}  pt={0.5}  style={{ backgroundColor:"#3090C7", height:"45%", width:"48px" ,   borderRadius:"8px 0 0 8px"}}>   */}
                                    <Box pl={1}  pt={0.5}  style={{ backgroundColor:"#3090C7", height:"45%", width:"75px" ,   borderRadius:"8px 0 0 8px"}}>
                                        <input className='indata' placeholder="40000.00"  style={{ color:"#95B9C7",outline:"none",border:"none", background:"transparent", width:"75px" ,fontSize:"17px" }}   />
                                         </Box>
                                    </Grid>
                                   
                                            
                                    <Grid item  pt={0.5}  >
                                           <Box     pt={0.5} pr={2}  style={{backgroundColor:"#3090C7", height:"45%", width:"38px" ,   borderRadius:"0 8px 8px 0"  }}>
                                            <h5   style={{marginTop:"0px",fontSize:"14px",color:"#95B9C7"}} > FIN</h5>
                                            </Box>
                                    </Grid>
                                   

                            </Grid >  









                                  </Grid>
                                 
                    
                              </Grid>
                            
                              
                        

                              

                            {/*  Mid Box  */} 
            
                                
                              <Grid   textAlign="center" xs={12} md={2}  justifyContent="center"
  alignItems="center"   style={{paddingTop:"50px", paddingBottom:"50px", paddingRight:"10px"  }}   >
                              
                                        {/* onClick={calculateTotal}   */}
                                  <ArrowCircleRightIcon  style={{fontSize: "50px", color:"white" }} sx={{ cursor: "pointer" }} />
                                

                              </Grid>
            
      
                


                            {/*   Right Box  */} 


<Grid  textAlign="center"    container sm={12} xs={12} md={5}   >
                       

                                



                               
                        <Grid item xl={4}  xs={12} textAlign="center"  md={5.5}     >     
                          <h3  style={{  marginLeft:"-4.5px" , marginBottom:"0px",fontSize:"25px", marginTop:"0px", color:"white"}} >You'll receive</h3>
                        </Grid >                     
                        <Grid   item xs={12} textAlign="center"   md={6.5}  >
                        </Grid>    

                                 
     

                        <Grid container xs={12} mt={1.5}   
                        >
                    <Grid container
                    
                      
                      xl={8}
                    
                     
                     // md={5.5}
                      md={5.8}
                      item xs={12}
                      
                     
                    >
                      <Grid
                  
                        xl={7} 
                        md={12}
                        
                        xs={12} container item
                      alignItems="center" justifyContent="center" 
                      
                      >   
                      
                        {/*  <input className='indata ' value={total}  id="total_value"  placeholder="0.00" style={{ marginTop: "5px", border: "none", color: "#95B9C7", outline: "none", background: "transparent", width: "88px", fontSize: "38px" }} />
                   */}
                        
  
                         <Grid item  md={6}   >
                     
                          <input
                             placeholder="0.00"
                           value= {result} 
                           
                           // value= {finalValue}
                        //    onChange={(e) => setText(e.target.value)} 
                          
                          //   id="total_value" 
                         
                          style={{
                            width: `${text.length}ch`,
                            border: "none",
                            marginTop: "5px",  color: "#95B9C7",
                            outline: "none", background: "transparent",
                            //width: "88px", 
                            minWidth: "88px",
                            maxWidth:"100px",
                            fontSize: "38px"
                          }}
                        />
                        </Grid>


                        {/*
                        <input className='indata '    id="out2x" placeholder="0.00" style={{ marginTop: "5px", border: "none", color: "#95B9C7", outline: "none", background: "transparent", width: "88px", fontSize: "38px" }} />
                    */}

                        
                        
                        <Grid item >
                        <p style={{ paddingTop: "0px", paddingBottom: "0px", marginBottom: "0px", marginTop: "0px", border: "none", fontSize: "40px", color: "white" }} >FIN</p>                                                                  
                        </Grid>
                        
                        
                        </Grid>                                                    
                           </Grid>      
                        </Grid>


                  


                     

                  

           
                        <Grid container xs={12} >
                              <Grid container xl={4.3}   item xs={12}  md={7.4}      spacing={0}
                                  // alignItems="center"
                                justifyContent="center"   >
                                    
                         
                                    <Grid item   pr={0.5} pt={0.8} ml={-3}>
                                           <h5   style={{ fontSize:"16px",marginBottom:"0px", marginTop:"0px", color:"#95B9C7" }}> 1 FIN =</h5>
                                    </Grid>
                                   

                                    <Grid item   pt={0.5} >
                        <Box pl={1} pt={0.5} style={{ backgroundColor: "#3090C7", height: "45%" }}>
                                        <input className='indata' readOnly  placeholder="0.000025"  style={{ color:"#95B9C7",outline:"none",border:"none", background:"transparent", width:"73px" ,fontSize:"17px" }} />
                                         </Box>
                                    </Grid>
                                   
                 
                                    <Grid item    pt={0.5} >
                                           <Box     pl={0.5}  pt={0.5}  pr={2}  style={{backgroundColor:"#3090C7", height:"45%", width:"40px" ,   borderRadius:"0 8px 8px 0"  }}>
                                            <h5   style={{color:"#95B9C7", fontSize:"14px", marginTop:"0px",}} > ETH</h5>
                                            </Box>
                                    </Grid>
                                   


                              </Grid>
                        </Grid>


                                
            







              
                     </Grid>


                            </Grid>
            
               
                  
                                          
            
            
            
                 
              


            
            
            
                                          
            
                            <Grid     mt={10}      container item xs={12} lg={12} mx="auto"  >
            

                              <Grid container     item xs={12} mt={1}   mb={3}     spacing={0}
                                  // alignItems="center"
                                justifyContent="center"     >
                                    
                         
                                   
                 
                  <Grid item xl={12} md={12} style={{ textAlign: "center" }} >
                                    <button 
                         
                         // style={{ backgroundColor: "DodgerBlue",
                      style={{
                        backgroundColor: "white",

                          width:"150px",
                          height:"40px",
                          borderRadius: "20px",
                          color:"#157DEC",
                          border:"none",
                          
                          //padding: "12px 16px",
                          fontSize: "16px",
                          cursor: "pointer"}}
                      
                            >
                        Execute Trade
            
            
                    
                           </button>
                                    </Grid>
                                   


                        </Grid>




   




            </Grid >
      



            </Box>
          </Grid>
</Container>





        </>
    )

}


export default Coins











{/*

import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import './rough.css'
import Box from '@mui/material/Box';

function Coins() {
    return (
        <>
        
                          <Grid  container item xs={12} lg={12} mx="auto"   >
                
                          <Grid   item xs={12} xl={6}    md={6} >
                            <Box  style={{display:"flex"}}    p={1} mt={1}  >
                                <Box  pl={6}  textAlign="center" width={"100%"} style={{display:"flex"}}   > 
                                  <Box>
                                    <img 
                                    style={{
                                            marginBottom:"0px",
                                           
                                          position: "relative",
                                          width: "60px",
                                          height:"35px"
                                            }}
                                      src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
                                  </Box>
                              
                                    <Box style={{paddingLeft:"5px"}}>
                                    <h5  style={{marginBottom:"0px", fontSize:"24px", color:"black", marginTop:"0px"}}  >AIRSWAP</h5>
                                    </Box>
                                  </Box> 
                              

                              </Box>
                                       
                          


                          </Grid>
  

  
         <Grid item    xl={6} xs={12} md={6}    >
       <Box mt={2}  p={1}  style={{display:"flex" }} >
  
                <Box  style={{ width:"30%"}}>
                  </Box>
                                  
   
        <Box    style={{ width:"40%"}}  >           
  
  
  
               <button
                                style={{ 
                                    marginBottom:"0px",
               backgroundColor: "#DBE9FA",
               width:"80px",
               height:"30px",
               borderRadius: "20px",
               
               border:"none",
               color: "DodgerBlue",
               //padding: "12px 16px",
               fontSize: "12px",
               cursor: "pointer"}}
           
          >
             Connect  
  
                    </button>
  
            
        
        
        
           </Box>
               
  
                                  
  
  
     
    
           <Box  style={{textAlign:"center", width:"50%",   margin:"4px"}}   >
                      <p   style={{paddingTop:"2px", marginBottom:"0px",marginTop:"0px", fontSize:"13px"}}> Activity  </p>
                     
                     </Box>    
               
   
   
   
   
   
   
                   <Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
                      <p   style={{paddingTop:"2px",marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> Explorer  </p>
                     
                     </Box>           
                   
   
   
   
   
   
     
                     <Box  style={{textAlign:"center", width:"50%", margin:"4px"}}   >
                      <p   style={{paddingTop:"2px", marginBottom:"0px", marginTop:"0px", fontSize:"13px"}}> More  </p>
                     
                     </Box>    
   
   
   
                 
   
   
   
                    
                   <Box   style={{ width:"50%" }}>
                      
  
  
  
  
             <button
                                style={{ 
                                    marginBottom:"0px",
               backgroundColor: "#DBE9FA",
               width:"80px",
               height:"30px",
               borderRadius: "20px",
             
               border:"none",
               color: "DodgerBlue",
               //padding: "12px 16px",
               fontSize: "12px",
               cursor: "pointer"}}
           
             >
             Mainnet  
  
                    </button>
  
  
  
                     </Box>           
                   
   
                


                     <Box  style={{ width:"30%"}}>
                  </Box>




                    
  
                    </Box>

                    </Grid>       



           </Grid>
          
     
            








           <Container>
          <Grid  item    xl={12} xs={12} lg={12} mx="auto"  mt={3}  mb={10}  >
           
                    

            <Box mb={10} style={{ backgroundColor: "#157DEC", borderRadius: "18px ",  width: "100%", height: "100%",  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>            
                            
                        <Box >
                              <Box textAlign="center" p={2}   >
                                <h1   style={{marginBottom:"0px", color:"white" ,color:"white"}} >Start a Trade</h1>
                              </Box>
               
                              <Box textAlign="center"  >
                                <p style={{fontSize:"20px", marginTop:"0px", color:"white", color:"white"}}  >Select the amounts for your trade.</p>
                              </Box>
                    
                        </Box>
            
                                    
            
                                    
                        




                            <Grid   container spacing={3} xs={12} lg={12} mx="auto" mt={7}      >
                     
                            
                                 // Left Box 

                              <Grid container xs={12} md={5}  style={{border:"2px solid black"}}  >
                  
                          
                              
                                  
                                <Grid container item  md={12}  >
                                  
                                
 
                                      <Grid   item  xs={12}  xl={8}  md={6.5} >
                                      </Grid>  

                                      <Grid   item xs={12} xl={4} textAlign="center"   md={5.5}   >     
                                         <h5  style={{marginBottom:"0px", marginTop:"0px", fontSize:"25px", color:"white"}} >You'll send</h5>
                                     </Grid >                     
                                     
                              
          
          

                                   

                              
                                     <Grid  mt={1.5}   item   xs={12}  xl={6.5} md={4} >
                                      </Grid>  

                                      <Grid mt={1.5} pl={7} container item xs={12} xl={5.5}  alignItems="center"  justifyContent="center"  md={8} >     
                                      
                                             <p  style={{  marginRight:"10px", padding:"0px", marginBottom: "0px", marginTop: "0px", border: "none", fontSize: "40px" , color:"white" }} >ETH</p>    
                                          
                                                    <input  className='indata' placeholder="0.00" style={{marginTop:"5px",border: "none",  color: "#95B9C7", outline: "none", background: "transparent", width: "84px", fontSize: "38px" }} />
                                           
                                     </Grid >                     
               
                                


                                      <Grid    item   xs={12} textAlign="center"  md={5}   xl={8}  >
                                       </Grid>  

                                      
                                        <Grid container item  md={7}   xs={12} xl={4} justifyContent="center"   textAlign="center" >     


                                       
                                         <Grid item pt={0.8}  pr={0.5}  style={{paddingBottom:"0px", marginBottom:"0px" }}  >
                                           <h5  style={{marginBottom:"0px", marginTop:"0px",fontSize:"16px" ,color:"#95B9C7" }}> 1 ETH =</h5>
                                         </Grid>
                                   
                                     
                                    <Grid item    pt={0.5} >
                                    <Box pl={1}  pt={0.5}  style={{ backgroundColor:"#3090C7", height:"45%", width:"48px" ,   borderRadius:"8px 0 0 8px"}}>
                                        <input className='indata' placeholder="0.00"  style={{ color:"#95B9C7",outline:"none",border:"none", background:"transparent", width:"36px" ,fontSize:"17px" }}   />
                                         </Box>
                                    </Grid>
                                   
                                            
                                    <Grid item  pt={0.5}  >
                                           <Box     pt={0.5} pr={2}  style={{backgroundColor:"#3090C7", height:"45%", width:"38px" ,   borderRadius:"0 8px 8px 0"  }}>
                                            <h5   style={{marginTop:"0px",fontSize:"16px",color:"#95B9C7"}} > FIN</h5>
                                            </Box>
                                    </Grid>
                                   

                            </Grid >  









                                  </Grid>
                                 
                    
                              </Grid>
                            
                              
                        

                              

                            //  Mid Box  
            
                                
                              <Grid   textAlign="center" xs={12} md={2}  justifyContent="center"
  alignItems="center"   style={{border:"2px solid black",paddingTop:"50px", paddingBottom:"50px", paddingRight:"35px"  }}   >
                              
                                        
                                  <SwapHorizontalCircleIcon style={{fontSize: "50px", color:"white" }} sx={{ cursor: "pointer" }} />
                                

                              </Grid>
            
      
                


                            ///   Right Box  


<Grid  textAlign="center" style={{border:"2px solid black"}}   container sm={12} xs={12} md={5}   >
                       

                                



                               
                        <Grid item xl={4}  xs={12} textAlign="center"  md={6}       style={{border:"2px solid black"}}   >     
                          <h3  style={{  marginLeft:"-4.5px" , marginBottom:"0px",fontSize:"25px", marginTop:"0px", color:"white"}} >You'll receive</h3>
                        </Grid >                     
                        <Grid   item xs={12} textAlign="center"   md={6} style={{border:"2px solid black"}}  >
                        </Grid>    

                                 
     

                        <Grid container xs={12} mt={1.5} style={{border:"2px solid black"}}  >
                           <Grid  container xl={8}   item xs={12}  md={6}  >
                              <Grid  xl={7} xs={12}   container item    alignItems="center"  justifyContent="center"   >         
                                <input   className='indata '  placeholder="0.00"  style={{ marginTop:"5px", border:"none",color:"#95B9C7" ,outline:"none", background:"transparent", width:"84px" ,fontSize:"38px" }}   />
                              <p  style={{paddingTop:"0px", paddingBottom:"0px",   marginBottom: "0px", marginTop: "0px",  border:"none",  fontSize: "40px", color:"white"  }} >FIN</p>                                                                  
                             </Grid>                                                    
                           </Grid>      
                        </Grid>


                  


                     

                  

           
                        <Grid container xs={12} style={{border:"2px solid black"}} >
                              <Grid container xl={4.3}   item xs={12}  md={7}  style={{border:"2px solid black"}}      spacing={0}
                                  // alignItems="center"
                                justifyContent="center" >
                                    
                         
                                    <Grid item  ml={-3}  pr={0.5} pt={0.8} style={{border:"2px solid black"}}>
                                           <h5   style={{ fontSize:"16px",marginBottom:"0px", marginTop:"0px", color:"#95B9C7" }}> 1 FIN =</h5>
                                    </Grid>
                                   

                                    <Grid item   pt={0.5} style={{border:"2px solid black"}} >
                                    <Box  pl={1}  pt={0.5}  style={{ backgroundColor:"#3090C7", height:"45%", borderRadius:"8px 0 0 8px"}}>
                                        <input className='indata' placeholder="0.00"  style={{ color:"#95B9C7",outline:"none",border:"none", background:"transparent", width:"36px" ,fontSize:"17px" }}   />
                                         </Box>
                                    </Grid>
                                   
                 
                                    <Grid item    pt={0.5} style={{border:"2px solid black"}} >
                                           <Box     pl={0.5}  pt={0.5}  pr={2}  style={{backgroundColor:"#3090C7", height:"45%", width:"46px" ,   borderRadius:"0 8px 8px 0"  }}>
                                            <h5   style={{color:"#95B9C7", fontSize:"16px", marginTop:"0px",}} > ETH</h5>
                                            </Box>
                                    </Grid>
                                   


                              </Grid>
                        </Grid>


                                
            







              
                     </Grid>


                            </Grid>
            
               
                  
                                          
            
            
            
                 
              


            
            
            
                                          
            
                            <Grid     mt={10}     container item xs={12} lg={12} mx="auto"  >
            

                              <Grid container    item xs={12} mt={1}   mb={3}     spacing={0}
                                  // alignItems="center"
                                justifyContent="center"     >
                                    
                         
                                    <Grid item xl={10}  md={9}   >
                                          
                                    </Grid>
                                   
                 
                                    <Grid item xl={2} md={3}  >
                                    <button 
                         
                         // style={{ backgroundColor: "DodgerBlue",
                      style={{
                        backgroundColor: "white",

                          width:"150px",
                          height:"40px",
                          borderRadius: "20px",
                          color:"#157DEC",
                          border:"none",
                          
                          //padding: "12px 16px",
                          fontSize: "16px",
                          cursor: "pointer"}}
                      
                            >
                        Execute Trade
            
            
                    
                           </button>
                                    </Grid>
                                   


                        </Grid>










            </Grid >
      



            </Box>
          </Grid>
</Container>





        </>
    )

}


export default Coins


*/}





















