import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Box, Button } from "@material-ui/core";
import { Grid, CardHeader } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Fragment } from "react";
import JsPDF from 'jspdf';
import Service from './Service';
import '../CSS/components.css';
import AsIsRow from './AsIsRow';

const AsIsPage = () => {
  const { validatedServices, services } = useSelector((state) => state.services)
  const generatePDF = () => {
    const report = new JsPDF('portrait', "pt", [1600, 1800]);
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    });
  }



  return (
    <div className="center" >
      <div padding='10%' >
        <Card id="report" style={{ backgroundColor: "#E9E9E9" }} >

          <CardHeader
            style={{ backgroundColor: "rgb(180, 180, 180)", padding: "3%" }}
            title="As-Is Document"
            subheader="Snapchat"
          ></CardHeader>

          <CardContent>
            <table>
              <tr>
                <th>
                  Service Title
                </th>
                <th>
                  Service Details
                </th>
              </tr>

              {
                validatedServices ? validatedServices["$values"].map(service => (
                  <AsIsRow title={service["serviceTitle"]} details={service["serviceDetails"]} />
                )) : "loading"

              }

            </table>
          </CardContent>
        </Card>
        <Button
          color="primary"
          variant="text"
          style={{
            textTransform: "none",
            width: "10%",
          }}
          onClick={generatePDF}
        >
          Export PDF
        </Button>
      </div>
    </div>
  );
};

export default AsIsPage