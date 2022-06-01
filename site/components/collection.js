import React, { Component, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

const colorHeading = "#323232";
const colorHover = "#40c6ff";
const colorDefaul = "#666";
const useStyles = makeStyles((theme) => ({
  itemProduct: {
    marginBottom: 20,
  },
  cardButton: {
    paddingBottom: 15,
  },
  productImg: {
    width: "100%",
    height: "auto",
    display: "inline-block",
    textAlign: "center",
  },
  cardBody: {
    textAlign: "center",
    "& h3": {
      fontSize: "19px",
      fontWeight: "bold",
      color: "#444",
      marginTop: "12px",
      marginBottom: "10px",
      fontFamily: "Mulish,sans-serif",
    },
    "& h4": {
      marginTop: "6px",
      marginBottom: "0px",
    },
  },
  cardTitle: {
    "&:hover": {
      color: `${colorHover}`,
    },
  },
  startRating: {
    "& span": {
      color: "#ffcc35",
      fontSize: "18px",
    },
  },
  cardPrice: {
    color: `${colorHover}`,
    fontSize: "22px",
    fontWeight: "500",
    fontFamily: "Mulish,sans-serif",
  },
  regular_price: {
    textDecoration: "line-through",
    marginRight: "15px",
    color: "#999",
    fontWeight: "400",
  },
  box_product: {
    border: "1px solid #efefef",
    padding: "15px 15px 22px 15px",
    transition: "0.35s",
    "&:hover": {
      boxShadow: "0 10px 6px -6px #ccc",
    },
  },
}));

export default function Collection(props) {
  const classes = useStyles();
  const { product } = props;
  //console.warn(product);
  let imageURl = "";
  return (
    <>
      <Grid item lg={1} md={1} sm={1}>
        <Box className={classes.box_product}>
          <Link href={`/product/${product?.product?.slug}`}>
            <a>
              <img
                className={classes.productImg}
                src={product.product.images[0].url}
                alt=""
              />
            </a>
          </Link>

          <Box className={classes.cardBody}>
            <h3>
              <Link href={`/product/${product?.product?.slug}`}>
                <a>{product.product.name}</a>
              </Link>
            </h3>
            <Box className={classes.startRating}>
              <Rating name="read-only" value="0" readOnly />
            </Box>
            <h4 className={classes.cardPrice}>
              ${product.product.price.value}
            </h4>
            <Box className={classes.cardButton}></Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
