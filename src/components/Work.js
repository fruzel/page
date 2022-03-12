import React from 'react'
import {
  Typography, Card, CardContent,
  CardMedia, Grid, Button, CardActions
} from '@mui/material'
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';



const bounceAnimation = keyframes`${bounceInUp}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;



function Work(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className='contentItem'
      >
        <Grid item xs={12} md={6}>
          <div id='works'>
            <Card sx={{ minWidth: 275, minHeight: 300, margin: '30px' }}>
              <CardContent>
                <Typography sx={{
                  fontSize: 20, fontWeight: 'bold',
                  textTransform: 'capitalize', fontFamily: 'Monospace'
                }} color="text.primary" gutterBottom>
                  {props.title} :
                </Typography>
                <Typography variant="body2" >
                  {props.description}
                </Typography>
              </CardContent>
              <CardActions>

              </CardActions>
            </Card>

          </div>

        </Grid>
        <Grid item xs={12} md={6}>
          {props.show ? <BouncyDiv>
            <Card sx={{ margin: '30px' }}>
              <CardMedia
                controls
                component="video"
                height="240"
                src={props.vid}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{
                  fontSize: 20, fontWeight: 'bold',
                  textTransform: 'capitalize', fontFamily: 'Monospace'
                }} color="text.primary" gutterBottom>
                  {props.title} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button size="small"><a href={props.link} style={{ textDecoration: 'none' }}>Learn More</a></Button>
                </Typography>
              </CardContent>
            </Card>
          </BouncyDiv> : <div></div>}
        </Grid>

      </Grid>

    </div>
  )
}

export default Work