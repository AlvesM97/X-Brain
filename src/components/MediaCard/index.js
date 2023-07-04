import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import purchase from "../../assets/Finalizado/purchase.png";
import { useMediaQuery } from "@mui/material";

function MediaCard(props) {
  const { handleClick, name, total } = props;
  const isCardSmall = useMediaQuery("(max-width: 719px)");

  const cardStyle = {
    width: 350,
    height: 450,
    margin: "0 auto",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: isCardSmall
      ? "0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)"
      : "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  };

  const cardContentStyle = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardActionsStyle = {
    justifyContent: "center",
  };

  const cardMediaStyle = {
    maxWidth: "55%",
    margin: "2em 0",
  };

  const titleTextStyle = {
    fontWeight: "700",
    color: "var(--emphasis-color)",
  };

  const totalTextStyle = {
    color: "#0095ff",
    fontWeight: 600,
  };

  const purchaseTextStyle = {
    fontWeight: 600,
    color: "var(--emphasis-color)",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={titleTextStyle}
          >
            {name},
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={purchaseTextStyle}
          >
            Sua compra no valor <span style={totalTextStyle}>{total}</span>
            <br />
            foi finalizada com sucesso.
          </Typography>
        </CardContent>
        <CardMedia
          sx={cardMediaStyle}
          component="img"
          image={purchase}
          alt="green iguana"
        />
        <CardActions sx={cardActionsStyle}>
          <Button
            style={{ backgroundColor: "#ffa726", color: "#ffffff" }}
            size="medium"
            onClick={handleClick}
          >
            INICIAR NOVA COMPRA
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MediaCard;
