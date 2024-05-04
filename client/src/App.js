import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Voting from "./artifacts/contracts/Voting.sol/Voting.json"
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import GiveVote from './Components/GiveVote';


function App() {
  const [account, setAccount] = useState("Connecting...")
  const [contract, setContract] = useState(null)
  const [provider, setProvider] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Voting.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();

    return () => {

    }
  }, [])

  const [yourName, setYourName] = useState("")



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home provider={provider} contract={contract} account={account} />} />
          <Route exact path="/givevote" element={<GiveVote />} />
          
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
