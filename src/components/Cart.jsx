import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

function Cart(props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={props.image} variant="square"></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            props.title.substring(0, 20) + "..." + `${"$" + props.price}`
          }
          secondary={"Quantity : " + props.quantity}
        />
      </ListItem>
    </List>
  );
}

export default Cart;
