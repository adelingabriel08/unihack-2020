import { Facebook, Instagram, Mail, Phone, Twitter } from "@material-ui/icons";
import React from "react";
import "../Components/ComponentsCSS/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid d-flex justify-content-between">
        <div className="box">
          <h5>About Us</h5>
          <p>
            Platforma pentru monitorizarea pacientilor cu simptome de SarsCov2
            de la domiciliu.
          </p>
        </div>
        <div className="box">
          <h5>Contact Us</h5>
          <table>
            <tr>
              <td>
                <Mail style={{ fill: "whitesmoke" }}></Mail>
              </td>
              <td> +90 9999 999 999</td>
            </tr>
            <tr>
              <td>
                <Phone style={{ fill: "whitesmoke" }}></Phone>
              </td>
              <td> covid@contact.com</td>
            </tr>
          </table>
        </div>
        <div className="box">
          <h5>Informations</h5>
          <table>
            <tr>
              <a href="#">Medics</a>
            </tr>
            <tr>
              <a href="#">Covid Simptoms</a>
            </tr>
            <tr>
              <a href="#">World status</a>
            </tr>
          </table>
        </div>
        <div className="box">
          <h5>Helpful Links</h5>
          <table>
            <tr>
              <a href="#">Supports</a>
            </tr>
            <tr>
              <a href="#">Terms & Condition</a>
            </tr>
            <tr>
              <a href="#">Privacy Policy</a>
            </tr>
          </table>
        </div>
      </div>
      <div className="icons container-fluid d-flex justify-content-between align-items-center">
        <Facebook style={{ fill: "whitesmoke" }}></Facebook>
        <Instagram style={{ fill: "whitesmoke" }}></Instagram>
        <Twitter style={{ fill: "whitesmoke" }}></Twitter>
      </div>
    </div>
  );
}
