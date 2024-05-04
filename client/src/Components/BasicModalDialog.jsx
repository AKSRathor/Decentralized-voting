import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';

export default function BasicModalDialog({open, setOpen, account, contract, provider}) {
  const [partyName, setPartyName] = useState("")

  const handleOnSubmit = async()=>{
    try {
      await contract.addPartyMember(partyName, account);
    } catch (error) {
      console.error("Error adding party member:", error);
    }
    // let partyList = await contract.partyList
    // console.log(partyList)
  }
  const handleOnTextChange = (e)=>{
    setPartyName(e.target.value)
    
  }
  
  return (
    <React.Fragment>
      {/* <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button> */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>BlocVoters - Let's take part in elections</DialogTitle>
          <DialogContent>Fill in the information related to your organisation</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl >
                <FormLabel>Name of the organisation</FormLabel>
                <Input autoFocus required onChange={handleOnTextChange} />
              </FormControl>
              
              <Button onClick={handleOnSubmit} type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}