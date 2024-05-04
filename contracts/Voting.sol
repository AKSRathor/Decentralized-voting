// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Voting {
    struct VoteTable {
        address user;
        string userName;
        bool isVoted;
    }
    struct PartyInfo {
        address party;
        string partyName;
        uint256 totalVotes;
        address[] votMem ;
    }
    // mapping(address => PartyInfo[]) public partyList;
    // mapping(address => VoteTable[]) public voteList;
    // mapping(address => bool) public hasVoted;  // Keep track of whether a voter has voted
    
    PartyInfo[] public partyList; // Declare an array to store PartyInfo instances
    VoteTable[] public voteList;
    mapping(address => bool) public hasVoted;  // Keep track of whether a voter has voted
    mapping(address=>uint256) public partyIndex;

    function addPartyMember(string memory _partyName, address _partyAddress) public {
        partyList.push(PartyInfo({
            party: _partyAddress,
            partyName: _partyName,
            totalVotes: 0,
            votMem: new address[](0)
        }));
    }

    function giveVote(address _voter, address _party, string memory voterName) public  {
        
     
        require(!hasVoted[_voter], "Voter has already voted");
        voteList.push(VoteTable({
            user:_voter,
            userName:voterName,
            isVoted:true

        }));
        for (uint256 i = 0; i<partyList.length; i++) 
        {
            if(partyList[i].party == _party){
                partyList[i].totalVotes++;
                partyList[i].votMem.push(_voter);
                break;
            }
        }
        hasVoted[_voter] = true;


    }

    function displayAllVoters(address _party) external view returns(address[] memory) {
        return partyList[partyIndex[_party]].votMem;
    }

    function displayAllParties() external view returns(PartyInfo[] memory) {
        return partyList;
    }

}
