import React from "react";
import styles from "./spinner.css";
import Modal from "react-modal";

export default function LoadingSpinner() {

  return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
  );
}