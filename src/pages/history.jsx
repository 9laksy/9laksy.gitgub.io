import React, { useEffect, useState } from 'react';
import {
    Page,
    Navbar,
    List,
    ListItem,
    Card,
    CardContent,
    Block,
    Icon,
    Button,
    useStore,
    NavLeft, NavTitle, NavRight, NavTitleLarge
} from 'framework7-react';
import { formatDate, formatDateTitle } from '../utils/functions';
import store from '../js/store';
import {Link} from "framework7-icons/react";

const styles = {
  title: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  icon: {
    position: "absolute",
    right: "12px",
    top: "16px"
  },
  navbarIcon: {
    position: "absolute",
    right: "0",
    top: "-13px",
  }
}

const History = () => {

  let history = useStore('history');
  //console.log(history);

  const handleDelete = (event) => {
      let index = event.target.getAttribute("data-index");
      store.dispatch('removeHistory', index);
  }

  const handleDeleteAll = () => {
    store.dispatch('deleteAllHistory');
  }

  return (
    <Page name="history">
      <Navbar>
      <NavTitle>History</NavTitle>
      <NavRight>
            <Button style={styles.navbarIcon} onClick={handleDeleteAll}>
              {/* <Icon ios="f7:trash" aurora="f7:trash" md="material:delete"></Icon> */}
              Clear All
            </Button>
      </NavRight>
    </Navbar>

      {history !== null && history.map((h, index) => (
        <Card key={index}>
          <Block strong style={styles.title} className={"text-theme"}>
            {formatDateTitle(h.timestamp)}

            <Button style={styles.icon} onClick={handleDelete}>
              <Icon ios="f7:trash" data-index={index} aurora="f7:trash" md="material:delete"></Icon>
            </Button>
          </Block>
          <CardContent>
            <List>
              <ListItem>
                <h4 style={{ margin: 0 }}>Amount <span style={{ position: "absolute", right: "14px" }}>{h.amount}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>Interest Rate <span style={{ position: "absolute", right: "14px" }}>{h.irate}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>Days <span style={{ position: "absolute", right: "14px" }}>{h.days}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>From Date <span style={{ position: "absolute", right: "14px" }}>{formatDate(h.fdate)}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>To Date <span style={{ position: "absolute", right: "14px" }}>{formatDate(h.todate)}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>Interest <span style={{ position: "absolute", right: "14px" }}>{h.interest}</span></h4>
              </ListItem>
              <ListItem>
                <h4 style={{ margin: 0 }}>Total <span style={{ position: "absolute", right: "14px" }}>{h.total}</span></h4>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      ))}
    </Page>
  );
}


export default History;
