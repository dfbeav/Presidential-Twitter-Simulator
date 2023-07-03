import { Grid, Container } from '@mantine/core';

export default function Home() {
  return (
    <Container>
      <Grid>
        <Grid.Col xs={4}>
          {/* Navigation bar */}
        </Grid.Col>
        <Grid.Col xs={8}>
          {/* Main feed */}
        </Grid.Col>
        <Grid.Col xs={4}>
          {/* Trending topics */}
        </Grid.Col>
      </Grid>
    </Container>
  );
}
