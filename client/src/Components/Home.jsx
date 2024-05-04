import React, { useEffect, useState } from 'react'
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';
import BasicModalDialog from './BasicModalDialog';
import ShowAddress from './ShowAddress';


const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography['body-sm'],
    textAlign: 'center',
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
    cursor: "pointer",
    height: "300px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
}));

const Home = ({ account, contract, provider }) => {

    const fetchAllParties =async ()=>{
        let allParties = await contract.displayAllParties()
        for (let i = 0; i < allParties.length; i++) {
            console.log(allParties[i])
            
        }
    }
    useEffect(() => {

        fetchAllParties();
    
      return () => {
        
      }
    }, [])
    
    const [open, setOpen] = useState(false);
    return (
        <div id='home'>
            <BasicModalDialog contract = {contract} provider = {provider} account = {account} open={open} setOpen={setOpen} />
            <div id="headingHome">
                <Typography variant="soft" level="h1">Welcome to BlocVoters</Typography>
            </div>
            <div id="homeSelection">
                <ShowAddress account={account} />


                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    height="100%"

                >
                    <Item onClick={() => setOpen(true)} variant='soft'>Take Part</Item>
                    <Item variant='soft'>Give Vote</Item>
                </Stack>
            </div>
        </div>
    )
}

export default Home