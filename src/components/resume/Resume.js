import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Grid, Chip } from '@material-ui/core';

export const StyledChip = styled(Chip)`
  margin: 0 0.5rem 0.5rem 0;
`;

const Resume = () => (
  <Container style={{ margin: '1rem auto' }}>
    <Typography variant="h2" component="h1">
      Hello, my name is Bruno Chirelli
    </Typography>
    <Typography>
      I have a degree in advertising and a passion for JavaScript development. I love to study and
      think about how technology helps improves people's lives.
    </Typography>
    <Grid container>
      {/* <Grid item xs={12} sm={8}>
        <section>
          <h2>Formation</h2>
        </section>
        <section>
          <h2>Professional Experience</h2>
        </section>
      </Grid> */}
      <Grid item xs={12} sm={4}>
        <section>
          <h2>Skills</h2>
          <h3>Languages</h3>
          <StyledChip onClick={() => {}} label="Portuguese" />
          <StyledChip onClick={() => {}} label="English" />
          <StyledChip onClick={() => {}} label="Spanish" />

          <h3>Technical</h3>
          <StyledChip onClick={() => {}} label="Algorithms" />
          <StyledChip onClick={() => {}} label="Patterns" />
          <StyledChip onClick={() => {}} label="HTML" />
          <StyledChip onClick={() => {}} label="CSS" />
          <StyledChip onClick={() => {}} label="JavaScript" />
          <StyledChip onClick={() => {}} label="TypeScript" />
          <StyledChip onClick={() => {}} label="React" />
          <StyledChip onClick={() => {}} label="Redux" />
          <StyledChip onClick={() => {}} label="Jest" />
          <StyledChip onClick={() => {}} label="Gatsby" />
          <StyledChip onClick={() => {}} label="Git" />
          <StyledChip onClick={() => {}} label="Regex" />

          <h3>Supportive</h3>
          <StyledChip onClick={() => {}} label="Material UI" />
          <StyledChip onClick={() => {}} label="Bootstrap" />
          <StyledChip onClick={() => {}} label="GitHub" />
          <StyledChip onClick={() => {}} label="JQuery" />
          <StyledChip onClick={() => {}} label="SEO" />

          <Typography variant="body2">
            Beside the frameworks, I'm also certified by Google being a Search Engine Marketing
            Specialist knowing the importancy of responsive, accessible and great performance
          </Typography>

          <h3>Design</h3>
          <StyledChip onClick={() => {}} label="Adobe XD" />
          <StyledChip onClick={() => {}} label="Photoshop" />
          <StyledChip onClick={() => {}} label="UI Design" />
          <StyledChip onClick={() => {}} label="UX Design" />

          <h3>Backend</h3>
          <StyledChip onClick={() => {}} label="Express" />
          <StyledChip onClick={() => {}} label="Node" />
          <StyledChip onClick={() => {}} label="Rest API" />
          <StyledChip onClick={() => {}} label="NoSQL" />
          <StyledChip onClick={() => {}} label="MongoDB" />

          <h3>Projects</h3>
          <StyledChip onClick={() => {}} label="Agile" />
          <StyledChip onClick={() => {}} label="Sprint" />
          <StyledChip onClick={() => {}} label="Dev/Ops" />
          <StyledChip onClick={() => {}} label="GTD" />
        </section>
      </Grid>
    </Grid>
  </Container>
);

export default Resume;
