import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Box, Button } from "@material-ui/core";
import { Grid, CardHeader } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import JsPDF from 'jspdf';
import Service from './Service';
import  '../CSS/components.css';

const AsIsPage = () => {
  const { meetingID, services } = useSelector((state) => state.services)
  const generatePDF = () => {
    const report = new JsPDF('portrait', "pt", 'a2');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
  }

  return (
    <div>
    <div id="report" className="center" padding='10%'>
      <Card style={{ backgroundColor: "#E9E9E9" }} >

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

            <tr>
              <td>
              {
                  services ? services["services"]["$values"].map(service => (
                      <Service service={service}></Service>
                  )) : "loading"
              }
              </td>
              <td>
                <tr>

                </tr>
              </td>
            </tr>
          </table>
        </CardContent>
      </Card>
    </div>
    <Button
        color="primary"
        variant="text"
        style={{
            textTransform: "none",
            width: "30%",
        }}
        onClick={generatePDF}
    >
        Export PDF
    </Button>
    </div>
  );
};

export default AsIsPage