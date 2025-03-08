import {
    createPlayerBoard,
    createComputerBoard,
    handleDisplayMessage,
} from "./gameDom.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    createPlayerBoard();
    createComputerBoard();
    handleDisplayMessage();
});
