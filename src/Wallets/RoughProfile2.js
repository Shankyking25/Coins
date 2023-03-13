


import React, { useState } from 'react';

import Image from "mui-image";
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'

  import logoImage from "../assets/images/logoicon.webp"
  import Grid from "@mui/material/Grid";

  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";



import Coins from '../Lists/Coins';
import Back from "../assets/images/loginBg.jpg";
import "./profile.css"

//import Row from 'react-bootstrap/Row';









export function Profile() {


  let activeStyle = {
    color:"#787878"
  };



  const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()
   



  const [showWalletModal, setShowWalletModal] = useState(false);

  const connectWallet=()=>{
    setShowWalletModal(true);
  
    
  
  
  
  }
  
  
const closeWalletModal =()=>{
  setShowWalletModal(false);
  }



  function connection(connector){
    connect({connector});
    setShowWalletModal(false);
 //   redirectLink();
}


  





  
    const [show, toggleShow] = React.useState(false);
  
  
  console.log(address);
 // console.log(connector.name);
        

    if (isConnected) {
      return (
        <>
        {/*    <div>
          <img src={ensAvatar} alt="ENS Avatar" />
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          <div>Connected to {connector.name}</div>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      */}

          
          <Coins/>


          </>
      )
    }
  
  
  
  return (

    
       <>     

      

<Box sx={{

backgroundImage: `url(${Back})`,
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
backgroundPosition: "center",
display: "grid",
padding: "0px",

}}
style={{height:"100vh"}}

>


<header className={`header `}   style={{backgroundColor:"black", width:"100%", height:"55px"}}>

          {/*
<Box  pl={6}  textAlign="center"  style={{display:"flex"}}   > 
                            <Box   style={{ marginTop:"10px"}}>
                            <img  src ={logoImage}  style={{
                                            marginBottom:"0px",
                                            marginTop:"3px",
                                          position: "relative",
                                          width: "40px",
                                          height:"25px"
                                            }} />
                            </Box>
        
                            <Box style={{paddingLeft:"5px" , marginTop:"10px"}}>
                                    <h5  style={{marginBottom:"0px", fontSize:"20px", color:"white", marginTop:"0px"}}  >InfinityVoid</h5>
                                    </Box>


          </Box>
                                          */}
          



          <Grid   item xs={12} xl={9} textAlign="center"   md={12}    style={{ backgroundColor:"black" ,border:"2px solid black"}}>
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
                                    <h5  style={{marginBottom:"0px", fontSize:"20px",  marginTop:"-2px",color:"white"}}  >InfinityVoid</h5>
                                    </Box>
                                  </Box> 
                              

                              </Box>
                                       
                          


                          </Grid>









        {/*
        <div  >
            <Button   onClick={() => toggleShow(!show)}> Connect Wallet  </Button>          
          </div>
  */}

      </header>



      
  
    
     
      <Box style={{  display: "grid", placeItems: "center" }}    >


        
<div style={{ backgroundColor:"#0A0519",  marginTop:"-290px" ,padding:"4px",  minWidth:"300px" , borderRadius:"15px" ,  border:"1px solid #26F8FF", width:"25%"  }}  >
       
       
          <div style={{textAlign:"center", paddingTop:"5px", paddingBottom:"2px", width:"100%"  }}>
            <p   style={{color:"#26F8FF", fontSize:"20px"}}>Sign In</p>
          
          </div>
       
       <Box  style={{ marginTop:"-9px",  width:"100%",paddingBottom:"20px" }} >
          {connectors.map((connector) => (
              <> 
             
            
              <Box   className="click"  style={{display:"flex", width:"90%",  margin:"12px", padding:"5px", borderRadius:"15px"}} key={connector.id}  onClick={() => connection(connector)}>
           <Box   style={{ paddingTop:"4px"  }}>
             <img    style={{ margin:"8px",width:"45px", height:"40px"}}  src={connector.options.imageIcon} />
           </Box>
       
           <Box style={{ paddingLeft:"8px",marginTop:"14px"}} >
              <h5   style={{margin:"0px", color:"white"}}>{connector.options.appName}</h5>
              <p  style={{margin:"0px" , marginTop:"1px", fontSize:"12px"  ,color:"white"}}>{connector.options.appSub}</p>
           </Box>
       
        </Box> 
              </>     
         ))}
       </Box>  





          </div>


       
          
          </Box>
     
        

</Box>
        
      
      
      </>  
        )
}
  

export default Profile





























{/*

import React, { useState } from 'react';


import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'



  import Image from 'mui-image'
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Button from '@mui/material/Button';


import Coins from '../Lists/Coins';
import Back from "../assets/images/loginBg.jpg";

//import Row from 'react-bootstrap/Row';









export function Profile() {


  let activeStyle = {
    color:"#787878"
  };



  const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()
   



  const [showWalletModal, setShowWalletModal] = useState(false);

  const connectWallet=()=>{
    setShowWalletModal(true);
  
    
  
  
  
  }
  
  
const closeWalletModal =()=>{
  setShowWalletModal(false);
  }



  function connection(connector){
    connect({connector});
    setShowWalletModal(false);
 //   redirectLink();
}


  





  
    const [show, toggleShow] = React.useState(false);
  
  
  console.log(address);
 // console.log(connector.name);
        

    if (isConnected) {
      return (
        <>
 

          
          <Coins/>


          </>
      )
    }
  
    return (
       

 
  <>
      <Box
       
      pl={{ base: '2px', md: '10px', lg: '135px' }}
       pr={{ base: '2px', md: '10px', lg: '135px' }} 
      bgColor="black"
      width={"100%"}
     
      left={0}
      zIndex={3}
    
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
      //    component={Link}
          to="/"
          lineHeight={1}
        
        > 
        <Stack direction={"row"} spacing={1}>
          <Image src ={Back} alt='Infinity Void' width="40px"/>
        <Typography variant="logoFont">
           InfinityVoid
          </Typography>
        </Stack>
         
        </Box>
        <Box
          color="inherit"
          display={{ xs: "none", lg: "flex" }}
          ml="auto"
        >
   
        </Box>
        <Box ml={{ xs: "auto", lg: 0 }}>
        {!isConnected ? (
            <Box p={2}>
            <Button size ="small" color="primary" onClick={connectWallet} >
              Connect Wallet
              </Button>
            </Box>
         
        ) : (
           <Stack direction="row" spacing={2} > 
 
          </Stack>
         )}

            
            
        </Box>

      </Box>
     
    </Box>


<Modal open={showWalletModal} onClose={closeWalletModal} sx={{ display: "grid", placeItems: "center"}}>
<Slide direction="down" in={showWalletModal} timeout={500}>
  <Box
  p={3.5}
    position="relative"
    width="360px"
    display="flex"
    flexDirection="column"
    borderRadius="xl"
    shadow="xl"
    bgColor="transparent"
    border="1px solid #1AADB2"
  >
           <Box >

          
            <Stack >
            <Typography color="primary" style={{textAlign:'center'}}>Sign In</Typography>

            <Typography color="white" variant="body2" style={{textAlign:'center',fontSize:'14px'}}>Choose how you want to connect with network.</Typography>

            </Stack>
          </Box>


         
         
            {connectors.map((connector) => (
                <>


<Box  
  mt={2}
  mb={2}
  p={2}
  width="300px"
  borderRadius="xl"
  shadow="xl"
  bgColor="walletBox"
    sx={{ display: 'flex-row', backgroundColor:'#343a40', }} key={connector.id}
                    onClick={() => connection(connector)}>
   
    <Box width='40px'>
    <Image src={connector.options.imageIcon} />
    </Box>
    <Box pl={2}>
     <Stack >
                         <Typography color="white" variant="footerTextCopy" style={{textAlign:'left'}}>{connector.options.appName}</Typography> 
                         <Typography color="white" variant="caption" style={{textAlign:'left'}}> {connector.options.appSub}</Typography>
                         </Stack>
        </Box>
</Box>
             </>
            ))}

  

</Box>

</Slide>
</Modal>
</>
    );
}





export default Profile


*/}

