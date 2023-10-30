import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductCatogory from '../../Components/ProductCatogory';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Sbk from '../../Images/sbk3.jpg';
import Fbk from '../../Images/frbk1.jpg';
import Ibk from '../../Images/Inbk1.jpg';
import Container from 'react-bootstrap/esm/Container';

function OurServices() {


  return (


    <>
      <Container style={{/* backgroundColor:'red',  */marginTop: '35px', borderRadius: '10px', border: '1px black solid', padding: '15px' }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12} style={{ height: 'auto', /* backgroundColor:'blue', */ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item md={7} xs={7} style={{}}>
              {/* <Card> */}

              <h3 class="card-title"> Smart Farming Products</h3><br></br>
              <h5 class="card-text">Smart Farming products from Smart Harvest – tailored to your farming business.</h5>
              <br></br>
              <p>Smart farming products are innovative agricultural tools and technologies that are designed to optimize crop production,
                reduce labor costs, and improve environmental sustainability. These products utilize advanced technologies such as GPS, sensors,
                cameras, robotics, and machine learning algorithms to perform a range of tasks related to planting,
                irrigation, fertilization, pest management, and harvesting.</p>

              <p class="card-text"></p>
              <Button variant="success" href="/ViewProducts">View Products</Button>{' '}

              {/* </Card> */}
            </Grid>
            <Grid item md={5} xs={5} style={{ overflow: 'hidden' }}>
              <img src={Sbk} style={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Grid>

      </Container >
      <br></br>
    </>

  );
}

export default OurServices