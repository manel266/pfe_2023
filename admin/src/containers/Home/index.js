import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout sidebar>
      <div
        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-5 mt-2"
        style={{ background: "#EFF2F9" }}
      >
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="dashboard-stat">
              <div class="dashboard-stat-icon widget-1">
                <i class="ti-location-pin"></i>
              </div>
              <div class="dashboard-stat-content">
                <h4>
                  <span class="cto">72</span>
                </h4>{" "}
                <p>product Posted</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="dashboard-stat">
              <div class="dashboard-stat-icon widget-2">
                <i class="ti-pie-chart"></i>
              </div>
              <div class="dashboard-stat-content">
                <h4>
                  <span class="cto">12</span>M
                </h4>{" "}
                <p>Total Sales</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="dashboard-stat">
              <div class="dashboard-stat-icon widget-3">
                <i class="ti-user"></i>
              </div>
              <div class="dashboard-stat-content">
                <h4>
                  <span class="cto">72</span>K
                </h4>{" "}
                <p>customer number</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="dashboard-stat">
              <div class="dashboard-stat-icon widget-4">
                <i class="ti-bookmark"></i>
              </div>
              <div class="dashboard-stat-content">
                <h4>
                  <span class="cto">80</span>
                </h4>{" "}
                <p>total categories</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="dashboard-gravity-list with-icons">
              <h4>Recent sales</h4>
              <ul>
                <li>
                  <i class="dash-icon-box ti-layers text-purple bg-light-purple"></i>{" "}
                  Your product{" "}
                  <strong>
                    <a href="#">IOS </a>
                  </strong>{" "}
                  has Already selling!
                  <a href="#" class="close-list-item">
                    <i class="fa fa-close"></i>
                  </a>
                </li>

                <li>
                  <i class="dash-icon-box ti-heart text-warning bg-light-warning"></i>{" "}
                  Your product{" "}
                  <strong>
                    <a href="#">Samsung s20 </a>
                  </strong>{" "}
                  has Already selling!
                  <a href="#" class="close-list-item">
                    <i class="fa fa-close"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="dashboard-gravity-list invoices with-icons">
              <h4>Invoices</h4>
              <ul>
                <li>
                  <i class="dash-icon-box ti-files text-warning bg-light-warning"></i>
                  <ul>
                    <li class="unpaid">Unpaid</li>
                    <li>Order: #20551</li>
                    <li>Date: 01/08/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Order
                    </a>
                  </div>
                </li>

                <li>
                  <i class="dash-icon-box ti-files text-success bg-light-success"></i>
                  <ul>
                    <li class="paid">Paid</li>
                    <li>Order: #20550</li>
                    <li>Date: 01/07/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Invoice
                    </a>
                  </div>
                </li>

                <li>
                  <i class="dash-icon-box ti-files text-danger bg-light-danger"></i>
                  <ul>
                    <li class="paid">Paid</li>
                    <li>Order: #20549</li>
                    <li>Date: 01/06/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Invoice
                    </a>
                  </div>
                </li>

                <li>
                  <i class="dash-icon-box ti-files text-success bg-light-success"></i>
                  <ul>
                    <li class="paid">Paid</li>
                    <li>Order: #20548</li>
                    <li>Date: 01/05/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Invoice
                    </a>
                  </div>
                </li>

                <li>
                  <i class="dash-icon-box ti-files text-warning bg-light-warning"></i>
                  <ul>
                    <li class="paid">Paid</li>
                    <li>Order: #20547</li>
                    <li>Date: 01/04/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Invoice
                    </a>
                  </div>
                </li>

                <li>
                  <i class="dash-icon-box ti-files text-info bg-light-info"></i>
                  <ul>
                    <li class="paid">Paid</li>
                    <li>Order: #20546</li>
                    <li>Date: 01/03/2019</li>
                  </ul>
                  <div class="buttons-to-right">
                    <a href="dashboard-invoice.html" class="button gray">
                      View Invoice
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
