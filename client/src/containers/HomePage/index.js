import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";

const HomePage = (props) => {
  return (
    <Layout>
      <div class="hero-banner full jumbo-banner" style={{ marginTop: "200px" }}>
        <div class="container">
          <div
            className="row"
            style={{ maxWidth: "200rem", height: "60vh", margin: "2rem" }}
          >
            <img
              style={{
                width: "1200px",
                height: "50vh",
                position: "absolute",
                zIndex: "-10",
              }}
              src="https://www.tunisianet.com.tn/modules/wbimageslider/views/img/0de63b36cd1f9592709f34a234d73b5a2e74997c_Sans-titre-1.jpg"
              alt="latest property"
              class="img-fluid"
            />
          </div>
          <div
            class="row align-items-center d-flex flex-column w-100"
            style={{ maxWidth: "100%", margin: "2rem" }}
          >
            <div class="col-lg-7 col-md-8">
              <h1>
                Find <span class="text-info">your Product</span> & make sure
                goal!
              </h1>
              <p class="lead">Your dream Product is waiting for you.</p>
              <form class="search-big-form banner-search shadow mt-3">
                <div class="row m-0" style={{ height: "4rem" }}>
                  <div class="col-lg-5 col-md-5 col-sm-12 p-0">
                    <div class="form-group">
                      <i class="ti-search"></i>
                      <input
                        type="text"
                        class="form-control b-0 b-r l-radius"
                        placeholder="Product Title or Keywords"
                      />
                    </div>
                  </div>

                  <div class="col-lg-5 col-md-4 col-sm-12 p-0">
                    <div class="form-group">
                      <select
                        id="jb-category"
                        class="js-states form-control b-0"
                      >
                        <option value="">&nbsp;</option>
                        <option value="1">Pc Portable</option>
                        <option value="2">accessoire et peripherique</option>
                        <option value="3">Pc bureau</option>
                        <option value="4">logiciel</option>
                        <option value="4">TV</option>
                        <option value="4">Mobile</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-2 col-md-3 col-sm-12 p-0">
                    <button
                      type="button"
                      class="btn dark-3 full-width r-radius"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-lg-5 col-md-4">
              <img
                src="assets/img/a-2.png"
                alt="latest property"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <section class="pt-0">
        <div class="container overlio-top">
          <div class="row " style={{ maxWidth: "1200px" }}>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="contact_side overlio-top">
                <div class="ct_cmp_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="ct_cmp_caption">
                  <h4 class="mb-0">Get in Touch.</h4>
                  <p>Get in touch via mail, call and direct address.</p>
                </div>

                <div class="ct_cmp_address">
                  <div class="ct_cmp_single">
                    <div class="ct_cmp_single_icon">
                      <i class="ti-location-pin"></i>
                    </div>
                    <div class="ct_cmp_brief">
                      <h5>Reach Us:</h5>
                      <span>
                        22 shopMarket, Tunis
                        <br />
                        Tunis, HPQCH
                      </span>
                    </div>
                  </div>
                  <div class="ct_cmp_single">
                    <div class="ct_cmp_single_icon">
                      <i class="fa fa-envelope"></i>
                    </div>
                    <div class="ct_cmp_brief">
                      <h5>Drop a mail:</h5>
                      <span>ecommerceTn.support@gmail.com</span>
                    </div>
                  </div>
                  <div class="ct_cmp_single">
                    <div class="ct_cmp_single_icon">
                      <i class="fa fa-phone"></i>
                    </div>
                    <div class="ct_cmp_brief">
                      <h5>Call Us:</h5>
                      <span>+91 256 258 4759</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-8 col-sm-12">
              <form class="contact_row">
                <div class="form_row_box">
                  <div class="form_row_header">
                    <div class="form_row_header_flex">
                      <img
                        src="assets/img/email.svg"
                        class="img-fluid"
                        width="52"
                        alt=""
                      />
                    </div>
                    <div class="form_row_header_right">
                      <p>
                        Write as a few words about your message and we'll
                        prepare your message for you within <strong>24</strong>{" "}
                        hours and inform you shortly.
                      </p>
                    </div>
                  </div>
                  <div class="form_row_box_body">
                    <div class="form-row">
                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Your Name</label>
                          <input
                            type="text"
                            class="form-control with-light"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Your e-Mail</label>
                          <input
                            type="email"
                            class="form-control with-light"
                            placeholder="updicl@gmail.com"
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            class="form-control with-light"
                            placeholder="ThemezHub Ltd."
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-12">
                        <div class="form-group">
                          <label>Phone No.</label>
                          <input
                            type="text"
                            class="form-control with-light"
                            placeholder="+91 256 584 7863"
                          />
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <label>Your description</label>
                          <textarea class="form-control with-light">
                            About Your description
                          </textarea>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <button type="button" class="btn dark-3">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
