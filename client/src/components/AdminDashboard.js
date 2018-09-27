import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import M from "materialize-css/dist/js/materialize.min.js";
import "./ClientDashboard.css";

const OrdersAll = () => {
  <div>All Orders</div>;
};
const UsersIndex = () => {
  <div>All Orders</div>;
};
const TrucksIndex = () => {
  <div>All Orders</div>;
};

const ZonesIndex = () => {
  <div>All Orders</div>;
};
export default class AdminDashboard extends Component {
  componentDidMount() {
    var sidenav = document.querySelector(".sidenav");
    var instance1 = M.Sidenav.init(sidenav, {
      edge: "left",
      inDuration: 250
    });
    var elems = document.querySelectorAll(".collapsible");
    var instance2 = M.Collapsible.init(elems, { accordion: true });
  }

  render() {
    return (
      <div>
        <AdminHeader />

        <ul id="slide-out" className="sidenav sidenav-fixed collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">account_circle</i>
              Clients
            </div>
            <ul className="collapsible-body">
              <li>Update</li>
              <li>View</li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">archive</i>
              Orders
            </div>
            <ul className="collapsible-body">
              <li>
                <Link to="/admin/dashboard/orders_all">View Orders</Link>
              </li>
              <li>
                <Link to="/admin/dashboard/metrics">Metrics</Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">build</i>
              Trucks
            </div>
            <ul className="collapsible-body">
              <li>New Truck</li>
              <li>View Trucks</li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">grid_on</i>
              Delivery Zones
            </div>
            <ul className="collapsible-body">
              <li>New Zone</li>
              <li>View Zones</li>
            </ul>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">drive_eta</i>
              Drivers
            </div>
            <ul className="collapsible-body">
              <li>New Driver</li>
              <li>View Drivers</li>
            </ul>
          </li>
        </ul>
        <a
          href="/client/dashboard"
          data-target="slide-out"
          className="sidenav-trigger"
        >
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}
