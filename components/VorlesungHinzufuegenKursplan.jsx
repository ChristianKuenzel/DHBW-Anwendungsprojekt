/* Sophie Strittmatter */
import { useState } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function VorlesungHinzufuegenKursplan(){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>

        {/* Button für Test aktuell noch da*/}
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Vorlesung hinzufügen</DialogTitle>
          <DialogContent>
            {/*Gestaltung des Fensters unter Verwendung der Komponenten nach dem Mockup */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Abbrechen
            </Button>
            <Button onClick={handleClose} color="primary">
              Hinzufügen
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


