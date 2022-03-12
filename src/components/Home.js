import React from 'react'
import { flipInX } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import {
  Typography, Card, CardContent,
  CardMedia, Grid, Paper
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import av from '../media/avatar.jpg'
import './Home.css'

const flipAnimation = keyframes`${flipInX}`;
const FlipDiv = styled.div`
    animation: 1s ${flipAnimation};
    margin-top: 200px;
  `;




function Home(props) {
  return (
    <div className='container'>


      <FlipDiv className='homeCard' style={{}}>
        <Paper elevation={3} sx={{ width: '80%', mx: 'auto' }} >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            className='home'
          >
            <Grid item>
              <div id='home'>
                <h1>Hello Fellow Adventurerer!</h1>
                <p>
                  This is Jiade Dai, a software developer located in New York area. <br/>
                  I'm passionate to learn new technologies and working with people.<br/>
                </p>

                <Typography gutterBottom variant="h5" component="div"
                className="skills" sx={{fontFamily:"Monospace",margin: '55px 0'}}>
                  Skills
                </Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                
                  >

                    <Grid item>
                      <FontAwesomeIcon icon="fa-brands fa-java" className='faIcons'/>
                      <Typography variant="body2" color="text.secondary">
                        Java
                      </Typography>
                    </Grid>

                    <Grid item>
                      <FontAwesomeIcon icon="fa-brands fa-js" className='faIcons'/>
                      <Typography variant="body2" color="text.secondary">
                        Javascript
                      </Typography>
                    </Grid>

                    <Grid item>
                      <FontAwesomeIcon icon="fa-brands fa-html5" className='faIcons' />
                      <Typography variant="body2" color="text.secondary">
                        HTML
                      </Typography>
                    </Grid>

                    <Grid item>
                      <FontAwesomeIcon icon="fa-brands fa-css3-alt" className='faIcons' />
                      <Typography variant="body2" color="text.secondary">
                        CSS
                      </Typography>
                    </Grid>

                    <Grid item>
                      <FontAwesomeIcon icon="fa-brands fa-react" className='faIcons'/>
                      <Typography variant="body2" color="text.secondary">
                        React
                      </Typography>
                    </Grid>
                  </Grid>
                <Typography variant="body2" color="text.secondary">
                </Typography>
              </div>
            </Grid>
            <Grid item>
              {props.showHome ? <>
                <Card sx={{ margin: '20px' }}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={av}
                    alt="avatar"
                  />
                  <CardContent>
                    <a href="https://github.com/fruzel" ><FontAwesomeIcon icon="fa-brands fa-github" className='faIcons links'/></a>
                    <a href="https://www.linkedin.com/in/jiade-dai-489499227" ><FontAwesomeIcon icon="fa-brands fa-linkedin" className='faIcons links'/></a>
                  </CardContent>
                </Card>
              </> : <div></div>}
            </Grid>
          </Grid>



        </Paper>
      </FlipDiv>
    </div>
  )
}

export default Home