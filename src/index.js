  import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 8080);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
