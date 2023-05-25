import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
         
          <iframe title="sales"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-project-0-wgeur/dashboards/221d3210-3cd2-4d1b-9c05-6ba6a0eae421?view=1c5ed173-0cbc-4cf1-aafc-63040bf44c90"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
