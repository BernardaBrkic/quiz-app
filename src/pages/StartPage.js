import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { questions } from "../Questions";
import classes from "./StartPage.module.css";
const StartPage = () => {
  const navigate = useNavigate();

  const startQuizHandler = () => {
    navigate("/quiz");
  };

  return (
    <React.Fragment>
      <Wrapper>
        <h1>Jeste li spremni testirati svoje znanje?</h1>
        <p>
          Ovaj kviz ima <b>{questions.length}</b> pitanja. Za svako pitanje
          imate <b>samo jedan</b> pokušaj!
        </p>
        <button onClick={startQuizHandler} className={classes.button}>
          Započni s kvizom
        </button>
      </Wrapper>
    </React.Fragment>
  );
};

export default StartPage;
