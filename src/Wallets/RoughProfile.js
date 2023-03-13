
import React, { useState } from 'react';


import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'




  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";



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

      


<header className={`header `}   style={{backgroundColor:"black", width:"100%", height:"55px"}}>

<Box  pl={6}  textAlign="center"  style={{display:"flex"}}   > 
                            <Box   style={{ marginTop:"10px"}}>
                                    <img 
                                    style={{
                                            marginBottom:"0px",
                                            
                                          position: "relative",
                                          width: "50px",
                                          height:"30px"
                                            }}
                                      src="https://dashboard.infinityvoid.io/static/media/logoicon.5407d5b4a7f92a63ff38.webp" />
                            </Box>
        
                            <Box style={{paddingLeft:"5px" , marginTop:"10px"}}>
                                    <h5  style={{marginBottom:"0px", fontSize:"21px", color:"white", marginTop:"0px"}}  >InfinityVoid</h5>
                                    </Box>


          </Box>


        {/*
        <div  >
            <Button   onClick={() => toggleShow(!show)}> Connect Wallet  </Button>          
          </div>
  */}

      </header>



      
  
    
     
    
    
    
      <div style={{  display: "grid", placeItems: "center", backgroundImage: `url(${Back})`, height:"92vh" }}    >


        
<div style={{   marginTop:"-50px" ,padding:"4px",  minWidth:"300px" , borderRadius:"15px" ,  border:"1px solid #26F8FF", width:"25%"  }}  >
       
       
          <div style={{textAlign:"center", paddingTop:"5px", paddingBottom:"2px", width:"100%"  }}>
            <p   style={{color:"#26F8FF", fontSize:"20px"}}>Sign In</p>
            {/*  <hr  style={{border: "2px solid" }}  />   */}
          </div>
       
       <div   style={{ marginTop:"-9px",  width:"100%",  paddingBottom:"10px"}} >
          {connectors.map((connector) => (
              <> 
             
            
        <div  style={{display:"flex", width:"90%", marginBottom:"30px",backgroundColor:"#343a40", margin:"12px", padding:"5px", borderRadius:"15px"}} key={connector.id}  onClick={() => connection(connector)}>
           <div   style={{ paddingTop:"4px"  }}>
             <img    style={{ margin:"8px",width:"45px", height:"40px"}}  src={connector.options.imageIcon} />
           </div>
       
           <div style={{ paddingLeft:"8px",marginTop:"14px"}} >
              <h5   style={{margin:"0px", color:"white"}}>{connector.options.appName}</h5>
              <p  style={{margin:"0px" , marginTop:"1px", fontSize:"12px"  ,color:"white"}}>{connector.options.appSub}</p>
           </div>
       
        </div> 
              </>     
         ))}
       </div>  





          </div>


       
          
          </div>
     
        
      


          
      
      
      </>  
        )
}
  

export default Profile

















{/*
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'
   
  export function Profile() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect()
    const { disconnect } = useDisconnect()
   
    if (isConnected) {
      return (
        <div>
          <img src={ensAvatar} alt="ENS Avatar" />
          <div>{ensName ? `${ensName} (${address})` : address}</div>
          ////  <div>Connected to {connector.name}</div>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )
    }
   
    return (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </button>
        ))}
   
        {error && <div>{error.message}</div>}
      </div>
    )
  }



  export default Profile

*/}