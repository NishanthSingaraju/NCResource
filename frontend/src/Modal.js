import { Card, CardContent } from '@mui/material';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 4,
  };

export default function ResourceModal(props) {
    return (
        <Modal 
        open={props.open ?? false}
        onClose={props.handleClose}
        >
        <Card sx={style}>
            <CardContent>
                <Stack display= "flex" alignItems="center" direction="row" spacing={2} style={{align_items: "center"}}>
                    <Card sx={{color: "purple", border: 3, padding: 3, margin: "1%"}}>
                        <h1>{props.element["Name"]}</h1>
                        <p1>Type: {props.element["Type"]}</p1> 
                        <br></br>
                        <br></br>
                        <p1>County: {props.element["County"]}</p1>
                        <br></br>
                        <br></br>
                        <p1>Address: {props.element["Address"]}</p1>
                    </Card>
                    <Card style={{backgroundColor: "purple", display: "flex", padding: 6, margin:"0%"}}>
                    <iframe src={props.element["Link"]} width={1000} height= {500}/>
                    </Card>
                </Stack>
            </CardContent>
        </Card>
        </Modal>
    );
}