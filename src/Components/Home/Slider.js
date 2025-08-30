import React from "react";

export default function Slider() {
  return (
    <div>
      <div className="container slider-parent">
        <div className="row">
          <div className="col">
            <h1 id="recent">Upcoming Activities</h1>
          </div>
        </div>

        <div className="row slider-row">
          <div className="col-12 slider-content-col">
            <div className="container slider-content">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="container-fluid">
                    <div className="white">
                      <div className="row">
                        <div className="col">

                          { <h1 id="slider-heading">{content[0][1]}</h1> }

                          <h3>Informal Session for Y24s</h3>

                        </div>
                      </div>

                      <div className="row">
                        <div className="col">

                          <h5 id="slider-date">{content[0][2]}</h5>
                        </div>
                      </div>
                      <div className="row ">
                        <div
                          className="col"
                          style={{
                            maxHeight: "200px",
                            overflowY: "auto",
                            paddingRight: "15px",
                            marginBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              maxHeight: "200px",
                              overflowY: "auto",
                              paddingRight: "15px",
                              marginBottom: "10px",
                            }}
                          >
                            <div id="y" style={{ maxWidth: "100%" }}>
                              {content[0][0]}{" "}
                            </div>{" "}
                          </div>
                        </div>
                        <div className="row readmore">
                          <div
                            className="col"

                          <p>
                            This Informal session was for Y24s.
                            </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          {/* Embedded PDF */}
                          <iframe
                            src="/info.pdf"
                            width="100%"

                            style={{
                              height: "70vh", // responsive height
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              marginBottom: "20px",
                            }}
                            title="PDF Viewer"
                          ></iframe>
                        </div>
                      </div>

                
                    </div>
                  </div>
                </div>
              </div>
              {/* Removed slider arrows & indicators */}
            </div>
          </div>
        </div>
      </div>

      {/* Contact row (kept same) */}
      <div className="row my-4 getm">
        <div className="col-sm-9">
          <h5>
            Get in touch with any questions, ideas, or feedback you may have.
          </h5>
        </div>
        <div className="col-sm-3">
          <a href="/contact-us">
            <button type="button" className="mybtn btn">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
