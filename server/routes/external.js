const { protect } = require('../middleware');
const dotenv = require('dotenv')

const router = require('express').Router();

router.use(protect)

router.get('/news', async (req, res) => {
    // setTimeout(() => res.status(400).json({ message: 'test' }), 2000)
    const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEWS_API}&locale=in`)
    const json = await response.json()
    if (!response.ok)
        res.status(400)
    res.json(json);
})

router.get('/weather/current', async (req, res) => {
    const { lat, lon } = req.query;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`)
    const json = await response.json()
    if (!response.ok) res.status(400)
    res.json(json);
})
router.get('/weather/pollution', async (req, res) => {
    const { lat, lon } = req.query;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`)
    const json = await response.json()
    if (!response.ok) res.status(400)
    res.json(json);
})
router.get('/weather/reverse', async (req, res) => {
    const { lat, lon } = req.query;
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`)
    const json = await response.json()
    if (!response.ok) res.status(400)
    res.json(json);
})
router.get('/weather/geo', async (req, res) => {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${req.query.q}&limit=5&appid=${process.env.WEATHER_API}`)
    const json = await response.json()
    if (!response.ok) res.status(400)
    res.json(json);
})

module.exports = router;