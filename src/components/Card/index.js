import React, { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import "./style.css";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { useMediaQuery } from "@mui/material";

export default function CardItens(props) {
  const {
    id,
    name,
    img,
    price,
    installment,
    discount,
    handleAddToTotal,
    handleRemoveFromTotal,
  } = props;
  const [isCardClicked, setIsCardClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [previousQuantity, setPreviousQuantity] = useState(0);
  const cardRef = useRef(null);
  const isCardMedium = useMediaQuery("(min-width: 720px) and (max-width: 1139px)");
  const isCardSmall = useMediaQuery("(max-width: 719px)");

  const handleCardClick = () => {
    setIsCardClicked(true);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const decimalPrice = parseFloat(price.replace(".", "").replace(",", "."));

    if (previousQuantity > quantity) {
      const removedTotalCents = decimalPrice * 100 * (previousQuantity - quantity);
      handleRemoveFromTotal(removedTotalCents);
    } else if (previousQuantity < quantity) {
      const addedTotalCents = decimalPrice * 100 * (quantity - previousQuantity);
      handleAddToTotal(addedTotalCents);
    }

    setPreviousQuantity(quantity);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsCardClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Card
      sx={{
        width: isCardMedium ? "13.7em" : isCardSmall ? "19em" : "14.9em",
        height: isCardMedium ? "21em" : "24em",
        maxHeight: isCardMedium ? "21em" : "24em",
        boxShadow: isCardClicked
          ? "0px 2px 10px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
          : "0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
      }}
      id={id}
      ref={cardRef}
    >
      <CardActionArea
        sx={
          isCardClicked
            ? { display: "flex", alignItems: "flex-start", minHeight: "100%" }
            : {
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }
        }
        onClick={handleCardClick}
      >
        <div>
          <CardMedia
            component="img"
            image={img}
            alt={`Product${id}`}
            sx={{
              width: "90%",
              height: "auto",
              objectFit: "contain",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>

        <CardContent
          sx={
            isCardClicked
              ? {
                  position: "absolute",
                  bottom: "0%",
                  background: "rgba(255, 255, 255, 0.9)",
                  padding: "1em",
                  width: "100%",
                }
              : { padding: "1em", width: "100%" }
          }
        >
          <Typography
            gutterBottom
            variant="body1"
            color="text.secondary"
            component="div"
            fontWeight="500"
            sx={{ fontSize: isCardMedium ? "0.93em" : "1em" }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontWeight="bold"
            sx={{ color: "var(--emphasis-color)", fontSize: "1.3em" }}
          >
            $ {price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: isCardMedium ? "0.8em" : "0.875em" }}
          >
            {installment}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: isCardMedium ? "0.8em" : "0.875em" }}
          >
            {discount}
          </Typography>
          {isCardClicked && (
            <div className="card-controls">
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={handleDecreaseQuantity}
                >
                  <HorizontalRuleIcon />
                </button>
                <div className="quantity-container">{quantity}</div>
                <button
                  className="quantity-button"
                  onClick={handleIncreaseQuantity}
                >
                  <AddIcon />
                </button>
              </div>
              <div className="add-button-container">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                  sx={{
                    fontWeight: "600",
                    fontSize: "0.93em",
                  }}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
