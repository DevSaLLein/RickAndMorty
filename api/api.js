import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;

const corsOptions = {
    origin: '*',
};

app.use(cors(corsOptions));

app.get('/api/characters', async (req, res) => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar personagens' });
    }
});

app.get('/api/episodes', async (req, res) => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar episódios' });
    }
});

app.get('/api/episode/:id', async (req, res) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${req.params.id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar episódio' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;
