import React from 'react';
import Reboot from 'material-ui/Reboot';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';


export default function TodoApp({ task, tasks, inputTask, addAndClearTask, redirectToError }) {
  return (
    <div>
      <Reboot />
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button raised color="secondary" onClick={() => addAndClearTask(task)}>add</Button>
        <List>
          {tasks.map((item, i) =>
            <ListItem key={i}>
              <ListItemText primary={`・${item}`} />
            </ListItem>
          )}
        </List>
        <button onClick={() => redirectToError()} >Go to Error Page</button>
      </div>
    </div>
  );
}
