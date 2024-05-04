import React, { useState } from 'react'
import List from '@mui/material/List';
import Typography from '@mui/joy/Typography';
import "./GiveVote.css"
import GiveVoteParty from './GiveVoteParty';

const GiveVote = () => {
    const [allPartyListState, setAllPartyListState] = useState([1,2,3])
    return (
        <div>
            <div id="headingHome">
                <Typography variant="soft" level="h1">Give your Vote</Typography>
            </div>

            <div id="allVotingList">
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >

                    {allPartyListState.map((i, key)=>{
                        return <GiveVoteParty/>
                    })}
                    
                </List>
            </div>
        </div>
    )
}

export default GiveVote