import { Box, Button, Card, Flex, Heading, Icon, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faGauge, faTemperature4, faWind } from '@fortawesome/free-solid-svg-icons';

const api_key = import.meta.env.VITE_WEATHER_API;
const urls = {
    current: (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
    forecast: (lat, lon) => `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
    pollution: (lat, lon) => `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`,
    reverse: (lat, lon) => `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${api_key}`,
    geo: (query) => `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`
}

const celsius = (k) => Math.round(k - 273.15) + '°';

export default function Weather() {
    const [data, setData] = useState({
        "current": {
            "coord": {
                "lon": 72.8782,
                "lat": 19.0785
            },
            "weather": [
                {
                    "id": 721,
                    "main": "Haze",
                    "description": "haze",
                    "icon": "50n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 302.18,
                "feels_like": 307.76,
                "temp_min": 302.18,
                "temp_max": 302.18,
                "pressure": 1006,
                "humidity": 79
            },
            "visibility": 3000,
            "wind": {
                "speed": 1.54,
                "deg": 190
            },
            "clouds": {
                "all": 75
            },
            "dt": 1718634343,
            "sys": {
                "type": 1,
                "id": 9052,
                "country": "IN",
                "sunrise": 1718584270,
                "sunset": 1718632064
            },
            "timezone": 19800,
            "id": 8131499,
            "name": "Konkan Division",
            "cod": 200
        },
        "forecast": {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1718636400,
                    "main": {
                        "temp": 302.18,
                        "feels_like": 307.76,
                        "temp_min": 302.18,
                        "temp_max": 302.94,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1006,
                        "humidity": 79,
                        "temp_kf": -0.76
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 75
                    },
                    "wind": {
                        "speed": 3.96,
                        "deg": 226,
                        "gust": 4.5
                    },
                    "visibility": 10000,
                    "pop": 0.64,
                    "rain": {
                        "3h": 0.65
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-17 15:00:00"
                },
                {
                    "dt": 1718647200,
                    "main": {
                        "temp": 302.24,
                        "feels_like": 307.92,
                        "temp_min": 302.24,
                        "temp_max": 302.37,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1006,
                        "humidity": 79,
                        "temp_kf": -0.13
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 79
                    },
                    "wind": {
                        "speed": 3.83,
                        "deg": 218,
                        "gust": 4.47
                    },
                    "visibility": 10000,
                    "pop": 0.76,
                    "rain": {
                        "3h": 2.03
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-17 18:00:00"
                },
                {
                    "dt": 1718658000,
                    "main": {
                        "temp": 302.19,
                        "feels_like": 307.57,
                        "temp_min": 302.19,
                        "temp_max": 302.2,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 78,
                        "temp_kf": -0.01
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 92
                    },
                    "wind": {
                        "speed": 3.47,
                        "deg": 206,
                        "gust": 4.17
                    },
                    "visibility": 10000,
                    "pop": 0.84,
                    "rain": {
                        "3h": 1.75
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-17 21:00:00"
                },
                {
                    "dt": 1718668800,
                    "main": {
                        "temp": 301.96,
                        "feels_like": 307.16,
                        "temp_min": 301.96,
                        "temp_max": 301.96,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 3.73,
                        "deg": 202,
                        "gust": 4.5
                    },
                    "visibility": 10000,
                    "pop": 0.88,
                    "rain": {
                        "3h": 1.61
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-18 00:00:00"
                },
                {
                    "dt": 1718679600,
                    "main": {
                        "temp": 302.84,
                        "feels_like": 308.37,
                        "temp_min": 302.84,
                        "temp_max": 302.84,
                        "pressure": 1007,
                        "sea_level": 1007,
                        "grnd_level": 1007,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 4.54,
                        "deg": 209,
                        "gust": 4.95
                    },
                    "visibility": 10000,
                    "pop": 0.21,
                    "rain": {
                        "3h": 0.13
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-18 03:00:00"
                },
                {
                    "dt": 1718690400,
                    "main": {
                        "temp": 303.97,
                        "feels_like": 309.98,
                        "temp_min": 303.97,
                        "temp_max": 303.97,
                        "pressure": 1007,
                        "sea_level": 1007,
                        "grnd_level": 1006,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 97
                    },
                    "wind": {
                        "speed": 6,
                        "deg": 220,
                        "gust": 5.97
                    },
                    "visibility": 10000,
                    "pop": 0.32,
                    "rain": {
                        "3h": 0.16
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-18 06:00:00"
                },
                {
                    "dt": 1718701200,
                    "main": {
                        "temp": 304.09,
                        "feels_like": 310,
                        "temp_min": 304.09,
                        "temp_max": 304.09,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 82
                    },
                    "wind": {
                        "speed": 6.62,
                        "deg": 230,
                        "gust": 6.81
                    },
                    "visibility": 10000,
                    "pop": 0.53,
                    "rain": {
                        "3h": 0.29
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-18 09:00:00"
                },
                {
                    "dt": 1718712000,
                    "main": {
                        "temp": 303.41,
                        "feels_like": 309.09,
                        "temp_min": 303.41,
                        "temp_max": 303.41,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 54
                    },
                    "wind": {
                        "speed": 5.94,
                        "deg": 231,
                        "gust": 6.67
                    },
                    "visibility": 10000,
                    "pop": 0.63,
                    "rain": {
                        "3h": 1.07
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-18 12:00:00"
                },
                {
                    "dt": 1718722800,
                    "main": {
                        "temp": 302.55,
                        "feels_like": 307.63,
                        "temp_min": 302.55,
                        "temp_max": 302.55,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 27
                    },
                    "wind": {
                        "speed": 5.53,
                        "deg": 230,
                        "gust": 6.62
                    },
                    "visibility": 10000,
                    "pop": 0.66,
                    "rain": {
                        "3h": 1.92
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-18 15:00:00"
                },
                {
                    "dt": 1718733600,
                    "main": {
                        "temp": 302.57,
                        "feels_like": 307.46,
                        "temp_min": 302.57,
                        "temp_max": 302.57,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 73,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 34
                    },
                    "wind": {
                        "speed": 5.09,
                        "deg": 230,
                        "gust": 6.12
                    },
                    "visibility": 10000,
                    "pop": 0.7,
                    "rain": {
                        "3h": 1.39
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-18 18:00:00"
                },
                {
                    "dt": 1718744400,
                    "main": {
                        "temp": 301.85,
                        "feels_like": 306.11,
                        "temp_min": 301.85,
                        "temp_max": 301.85,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 85
                    },
                    "wind": {
                        "speed": 4.77,
                        "deg": 226,
                        "gust": 5.9
                    },
                    "visibility": 10000,
                    "pop": 0.78,
                    "rain": {
                        "3h": 2.54
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-18 21:00:00"
                },
                {
                    "dt": 1718755200,
                    "main": {
                        "temp": 301.73,
                        "feels_like": 306.01,
                        "temp_min": 301.73,
                        "temp_max": 301.73,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 91
                    },
                    "wind": {
                        "speed": 4.68,
                        "deg": 217,
                        "gust": 6.06
                    },
                    "visibility": 10000,
                    "pop": 0.75,
                    "rain": {
                        "3h": 2.39
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-19 00:00:00"
                },
                {
                    "dt": 1718766000,
                    "main": {
                        "temp": 302.65,
                        "feels_like": 307.22,
                        "temp_min": 302.65,
                        "temp_max": 302.65,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 96
                    },
                    "wind": {
                        "speed": 4.71,
                        "deg": 208,
                        "gust": 5.52
                    },
                    "visibility": 10000,
                    "pop": 0.71,
                    "rain": {
                        "3h": 1.23
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-19 03:00:00"
                },
                {
                    "dt": 1718776800,
                    "main": {
                        "temp": 303.31,
                        "feels_like": 308.09,
                        "temp_min": 303.31,
                        "temp_max": 303.31,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 6.65,
                        "deg": 216,
                        "gust": 7.45
                    },
                    "visibility": 10000,
                    "pop": 0.76,
                    "rain": {
                        "3h": 1.34
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-19 06:00:00"
                },
                {
                    "dt": 1718787600,
                    "main": {
                        "temp": 303.78,
                        "feels_like": 308.96,
                        "temp_min": 303.78,
                        "temp_max": 303.78,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1003,
                        "humidity": 67,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 7.53,
                        "deg": 223,
                        "gust": 8.37
                    },
                    "visibility": 10000,
                    "pop": 0.67,
                    "rain": {
                        "3h": 0.48
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-19 09:00:00"
                },
                {
                    "dt": 1718798400,
                    "main": {
                        "temp": 303.2,
                        "feels_like": 307.83,
                        "temp_min": 303.2,
                        "temp_max": 303.2,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1003,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 96
                    },
                    "wind": {
                        "speed": 6.82,
                        "deg": 223,
                        "gust": 8.1
                    },
                    "visibility": 10000,
                    "pop": 0.76,
                    "rain": {
                        "3h": 0.93
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-19 12:00:00"
                },
                {
                    "dt": 1718809200,
                    "main": {
                        "temp": 302.66,
                        "feels_like": 307.24,
                        "temp_min": 302.66,
                        "temp_max": 302.66,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 6.62,
                        "deg": 214,
                        "gust": 7.96
                    },
                    "visibility": 10000,
                    "pop": 0.62,
                    "rain": {
                        "3h": 0.49
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-19 15:00:00"
                },
                {
                    "dt": 1718820000,
                    "main": {
                        "temp": 302.66,
                        "feels_like": 307.46,
                        "temp_min": 302.66,
                        "temp_max": 302.66,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 7.1,
                        "deg": 220,
                        "gust": 8.58
                    },
                    "visibility": 10000,
                    "pop": 0.66,
                    "rain": {
                        "3h": 0.6
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-19 18:00:00"
                },
                {
                    "dt": 1718830800,
                    "main": {
                        "temp": 302.26,
                        "feels_like": 307.12,
                        "temp_min": 302.26,
                        "temp_max": 302.26,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 7.37,
                        "deg": 228,
                        "gust": 8.92
                    },
                    "visibility": 10000,
                    "pop": 0.88,
                    "rain": {
                        "3h": 1.69
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-19 21:00:00"
                },
                {
                    "dt": 1718841600,
                    "main": {
                        "temp": 302.08,
                        "feels_like": 306.87,
                        "temp_min": 302.08,
                        "temp_max": 302.08,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 7.21,
                        "deg": 218,
                        "gust": 8.81
                    },
                    "visibility": 10000,
                    "pop": 0.94,
                    "rain": {
                        "3h": 2.65
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-20 00:00:00"
                },
                {
                    "dt": 1718852400,
                    "main": {
                        "temp": 302.79,
                        "feels_like": 307.78,
                        "temp_min": 302.79,
                        "temp_max": 302.79,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 6.65,
                        "deg": 216,
                        "gust": 8.05
                    },
                    "visibility": 10000,
                    "pop": 0.86,
                    "rain": {
                        "3h": 1.56
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-20 03:00:00"
                },
                {
                    "dt": 1718863200,
                    "main": {
                        "temp": 303.67,
                        "feels_like": 309.22,
                        "temp_min": 303.67,
                        "temp_max": 303.67,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 82
                    },
                    "wind": {
                        "speed": 6.33,
                        "deg": 215,
                        "gust": 8.28
                    },
                    "visibility": 10000,
                    "pop": 0.81,
                    "rain": {
                        "3h": 1.22
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-20 06:00:00"
                },
                {
                    "dt": 1718874000,
                    "main": {
                        "temp": 304.23,
                        "feels_like": 310.66,
                        "temp_min": 304.23,
                        "temp_max": 304.23,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 83
                    },
                    "wind": {
                        "speed": 7.17,
                        "deg": 226,
                        "gust": 8.75
                    },
                    "visibility": 10000,
                    "pop": 0.48,
                    "rain": {
                        "3h": 0.9
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-20 09:00:00"
                },
                {
                    "dt": 1718884800,
                    "main": {
                        "temp": 304.05,
                        "feels_like": 310.19,
                        "temp_min": 304.05,
                        "temp_max": 304.05,
                        "pressure": 1003,
                        "sea_level": 1003,
                        "grnd_level": 1003,
                        "humidity": 69,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 64
                    },
                    "wind": {
                        "speed": 7.4,
                        "deg": 217,
                        "gust": 9.03
                    },
                    "visibility": 10000,
                    "pop": 0.34,
                    "rain": {
                        "3h": 0.25
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-20 12:00:00"
                },
                {
                    "dt": 1718895600,
                    "main": {
                        "temp": 303.04,
                        "feels_like": 308.65,
                        "temp_min": 303.04,
                        "temp_max": 303.04,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 73,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 51
                    },
                    "wind": {
                        "speed": 7.39,
                        "deg": 209,
                        "gust": 9.1
                    },
                    "visibility": 10000,
                    "pop": 0.62,
                    "rain": {
                        "3h": 0.88
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-20 15:00:00"
                },
                {
                    "dt": 1718906400,
                    "main": {
                        "temp": 302.54,
                        "feels_like": 307.83,
                        "temp_min": 302.54,
                        "temp_max": 302.54,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 47
                    },
                    "wind": {
                        "speed": 7.28,
                        "deg": 218,
                        "gust": 8.71
                    },
                    "visibility": 10000,
                    "pop": 0.64,
                    "rain": {
                        "3h": 0.55
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-20 18:00:00"
                },
                {
                    "dt": 1718917200,
                    "main": {
                        "temp": 301.98,
                        "feels_like": 307.22,
                        "temp_min": 301.98,
                        "temp_max": 301.98,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 68
                    },
                    "wind": {
                        "speed": 6.91,
                        "deg": 227,
                        "gust": 8.6
                    },
                    "visibility": 10000,
                    "pop": 0.94,
                    "rain": {
                        "3h": 1.83
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-20 21:00:00"
                },
                {
                    "dt": 1718928000,
                    "main": {
                        "temp": 302.31,
                        "feels_like": 307.46,
                        "temp_min": 302.31,
                        "temp_max": 302.31,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 80
                    },
                    "wind": {
                        "speed": 6.1,
                        "deg": 214,
                        "gust": 7.95
                    },
                    "visibility": 10000,
                    "pop": 0.98,
                    "rain": {
                        "3h": 1.75
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-21 00:00:00"
                },
                {
                    "dt": 1718938800,
                    "main": {
                        "temp": 303.23,
                        "feels_like": 308.63,
                        "temp_min": 303.23,
                        "temp_max": 303.23,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1005,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 91
                    },
                    "wind": {
                        "speed": 5.54,
                        "deg": 215,
                        "gust": 7.25
                    },
                    "visibility": 10000,
                    "pop": 0.8,
                    "rain": {
                        "3h": 1.31
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-21 03:00:00"
                },
                {
                    "dt": 1718949600,
                    "main": {
                        "temp": 304.02,
                        "feels_like": 309.82,
                        "temp_min": 304.02,
                        "temp_max": 304.02,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 61
                    },
                    "wind": {
                        "speed": 5.82,
                        "deg": 222,
                        "gust": 7.13
                    },
                    "visibility": 10000,
                    "pop": 0.96,
                    "rain": {
                        "3h": 1.18
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-21 06:00:00"
                },
                {
                    "dt": 1718960400,
                    "main": {
                        "temp": 304.17,
                        "feels_like": 310.21,
                        "temp_min": 304.17,
                        "temp_max": 304.17,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1004,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 91
                    },
                    "wind": {
                        "speed": 6.96,
                        "deg": 221,
                        "gust": 8
                    },
                    "visibility": 10000,
                    "pop": 0.51,
                    "rain": {
                        "3h": 0.41
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-21 09:00:00"
                },
                {
                    "dt": 1718971200,
                    "main": {
                        "temp": 303.62,
                        "feels_like": 309.36,
                        "temp_min": 303.62,
                        "temp_max": 303.62,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1003,
                        "humidity": 70,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 96
                    },
                    "wind": {
                        "speed": 6.69,
                        "deg": 218,
                        "gust": 7.73
                    },
                    "visibility": 10000,
                    "pop": 0.61,
                    "rain": {
                        "3h": 0.62
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-21 12:00:00"
                },
                {
                    "dt": 1718982000,
                    "main": {
                        "temp": 302.72,
                        "feels_like": 308.06,
                        "temp_min": 302.72,
                        "temp_max": 302.72,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 74,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 6.32,
                        "deg": 212,
                        "gust": 7.36
                    },
                    "visibility": 10000,
                    "pop": 0.69,
                    "rain": {
                        "3h": 1
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-21 15:00:00"
                },
                {
                    "dt": 1718992800,
                    "main": {
                        "temp": 302.08,
                        "feels_like": 307.07,
                        "temp_min": 302.08,
                        "temp_max": 302.08,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1005,
                        "humidity": 77,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 86
                    },
                    "wind": {
                        "speed": 5.89,
                        "deg": 209,
                        "gust": 7.17
                    },
                    "visibility": 10000,
                    "pop": 0.66,
                    "rain": {
                        "3h": 1.35
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-21 18:00:00"
                },
                {
                    "dt": 1719003600,
                    "main": {
                        "temp": 301.86,
                        "feels_like": 306.51,
                        "temp_min": 301.86,
                        "temp_max": 301.86,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1003,
                        "humidity": 77,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 64
                    },
                    "wind": {
                        "speed": 5.76,
                        "deg": 204,
                        "gust": 6.92
                    },
                    "visibility": 10000,
                    "pop": 0.73,
                    "rain": {
                        "3h": 1.67
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-21 21:00:00"
                },
                {
                    "dt": 1719014400,
                    "main": {
                        "temp": 301.49,
                        "feels_like": 305.77,
                        "temp_min": 301.49,
                        "temp_max": 301.49,
                        "pressure": 1004,
                        "sea_level": 1004,
                        "grnd_level": 1003,
                        "humidity": 78,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 51
                    },
                    "wind": {
                        "speed": 4.84,
                        "deg": 199,
                        "gust": 6
                    },
                    "visibility": 10000,
                    "pop": 0.72,
                    "rain": {
                        "3h": 1.19
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2024-06-22 00:00:00"
                },
                {
                    "dt": 1719025200,
                    "main": {
                        "temp": 302.12,
                        "feels_like": 306.97,
                        "temp_min": 302.12,
                        "temp_max": 302.12,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 34
                    },
                    "wind": {
                        "speed": 4.77,
                        "deg": 206,
                        "gust": 5.41
                    },
                    "visibility": 10000,
                    "pop": 0.69,
                    "rain": {
                        "3h": 1.32
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-22 03:00:00"
                },
                {
                    "dt": 1719036000,
                    "main": {
                        "temp": 303.33,
                        "feels_like": 308.88,
                        "temp_min": 303.33,
                        "temp_max": 303.33,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 71,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 39
                    },
                    "wind": {
                        "speed": 5.48,
                        "deg": 218,
                        "gust": 5.98
                    },
                    "visibility": 10000,
                    "pop": 0.7,
                    "rain": {
                        "3h": 1.09
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-22 06:00:00"
                },
                {
                    "dt": 1719046800,
                    "main": {
                        "temp": 303.62,
                        "feels_like": 309.36,
                        "temp_min": 303.62,
                        "temp_max": 303.62,
                        "pressure": 1003,
                        "sea_level": 1003,
                        "grnd_level": 1002,
                        "humidity": 70,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 25
                    },
                    "wind": {
                        "speed": 5.7,
                        "deg": 226,
                        "gust": 6.01
                    },
                    "visibility": 10000,
                    "pop": 0.84,
                    "rain": {
                        "3h": 0.27
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-22 09:00:00"
                },
                {
                    "dt": 1719057600,
                    "main": {
                        "temp": 303.08,
                        "feels_like": 308.5,
                        "temp_min": 303.08,
                        "temp_max": 303.08,
                        "pressure": 1002,
                        "sea_level": 1002,
                        "grnd_level": 1002,
                        "humidity": 72,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 25
                    },
                    "wind": {
                        "speed": 5.32,
                        "deg": 232,
                        "gust": 5.93
                    },
                    "visibility": 10000,
                    "pop": 0.85,
                    "rain": {
                        "3h": 0.59
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2024-06-22 12:00:00"
                }
            ],
            "city": {
                "id": 8131499,
                "name": "Konkan Division",
                "coord": {
                    "lat": 19.0785,
                    "lon": 72.8782
                },
                "country": "IN",
                "population": 0,
                "timezone": 19800,
                "sunrise": 1718584270,
                "sunset": 1718632064
            }
        },
        "pollution": {
            "coord": {
                "lon": 72.8777,
                "lat": 19.076
            },
            "list": [
                {
                    "main": {
                        "aqi": 2
                    },
                    "components": {
                        "co": 594.14,
                        "no": 0.95,
                        "no2": 27.76,
                        "o3": 9.57,
                        "so2": 25.03,
                        "pm2_5": 17.57,
                        "pm10": 27.95,
                        "nh3": 6.84
                    },
                    "dt": 1718634123
                }
            ]
        }
    });
    const [query, setQuery] = useState('');
    const [coordList, setCoordList] = useState([]);

    const search = async () => {
        const coords = await fetch(urls.geo(query));
        const coordsJson = await coords.json();
        setCoordList(coordsJson);
    };

    const setLocation = async (lat, lon) => {

        const current = await fetch(urls.current(lat, lon));
        const forecast = await fetch(urls.forecast(lat, lon));
        const pollution = await fetch(urls.pollution(lat, lon));

        const currentJson = await current.json();
        const forecastJson = await forecast.json();
        const pollutionJson = await pollution.json();

        setData({ current: currentJson, forecast: forecastJson, pollution: pollutionJson });
        setCoordList([]);
        setQuery('');
    }

    return <Flex p={4} gap={4} direction='column' textAlign='center'>
        <Flex as={Card} p={4} gap={4} direction='column'>
            <Flex direction='row' gap={4} >
                <Input placeholder='Search City' value={query} onChange={(e) => setQuery(e.target.value)} />
                <Button onClick={search}>Search</Button>
            </Flex>
            {coordList.length > 0 && query !== '' && <Flex direction='column' gap={2}>
                {coordList.map((e, i) => <Button onClick={() => setLocation(e.lat, e.lon)} key={i} p={2}>
                    {e.name}, {e.state}, {e.country}
                </Button>)}
            </Flex>}
        </Flex>
        <Flex as={Card} p={4} direction='row' wrap='wrap' gap={4}>
            <Flex direction='column' justify='center' align='center'>
                <Card as={Flex} direction='column' p={2} gap={2}>
                    <Flex justify='center' align='center'>
                        <Image src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} w='96px' />
                        <Heading>{celsius(data.current.main.temp)} </Heading>
                    </Flex>
                    <Heading fontSize='2xl'>{data.current.weather[0].main}</Heading>
                    <Text>{data.current.weather[0].description}</Text>
                </Card>
            </Flex>
            <Flex direction='column' flexGrow={1} p={2} gap={2}>
                <Flex gap={4} flexWrap='wrap'>
                    <Card p={4}>
                        <Text mb={2}>Air Quality Index</Text>
                        <Flex gap={4}>
                            <Icon as={FontAwesomeIcon} icon={faWind} h='64px' w='64px' />
                            <Box>
                                <Text>PM2.5</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.pm2_5}</Heading>
                            </Box>
                            <Box>
                                <Text>SO2</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.so2}</Heading>
                            </Box>
                            <Box>
                                <Text>NO2</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.no2}</Heading>
                            </Box>
                            <Box>
                                <Text>O3</Text>
                                <Heading fontSize='2xl'>{data.pollution.list[0].components.o3}</Heading>
                            </Box>
                        </Flex>
                    </Card>
                    <Card p={4} >

                    </Card>
                </Flex>
                <Flex gap={4} flexWrap='wrap' >
                    <Card as={Flex} direction='row' gap={4} flexGrow={1} p={4} align='center' minW='96px'>
                        <Icon as={FontAwesomeIcon} icon={faDroplet} h='64px' w='64px' />
                        <Box flex={1}>
                            <Text>
                                Humidity
                            </Text>
                            <Heading fontSize='xl'>
                                {data.current.main.humidity}%
                            </Heading>
                        </Box>
                    </Card>
                    <Card as={Flex} direction='row' gap={4} flexGrow={1} align='center' p={4} minW='96px' >
                        <Icon as={FontAwesomeIcon} icon={faGauge} h='64px' w='64px' />
                        <Box flex={1}>
                            <Text>
                                Pressure
                            </Text>
                            <Heading fontSize='xl'>
                                {data.current.main.pressure}hPa
                            </Heading>
                        </Box>
                    </Card>
                    <Card as={Flex} direction='row' gap={4} flexGrow={1} align='center' p={4} minW='96px'>
                        <Icon as={FontAwesomeIcon} icon={faEye} h='64px' w='64px' />
                        <Box flex={1}>
                            <Text>
                                Visibility
                            </Text>
                            <Heading fontSize='xl'>
                                {Math.round(data.current.visibility / 1000)}km
                            </Heading>
                        </Box>
                    </Card>
                    <Card as={Flex} direction='row' gap={4} flexGrow={1} align='center' p={4} minW='96px'>
                        <Icon as={FontAwesomeIcon} icon={faTemperature4} h='64px' w='64px' />
                        <Box flex={1}>
                            <Text>
                                Feels Like
                            </Text>
                            <Heading fontSize='xl'>
                                {celsius(data.current.main.feels_like)}C
                            </Heading>
                        </Box>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
}
/*
[
    {
        "name": "Mumbai",
        "local_names": {
            "ur": "ممبئی",
            "ar": "مومباي",
            "oc": "Mumbai",
            "az": "Mumbay",
            "pl": "Mumbaj",
            "or": "ମୁମ୍ବାଇ",
            "kn": "ಮುಂಬೈ",
            "bn": "মুম্বই",
            "en": "Mumbai",
            "hi": "मुंबई",
            "pa": "ਮੁੰਬਈ",
            "uk": "Мумбаї",
            "de": "Mumbai",
            "io": "Mumbai",
            "ps": "ممبای",
            "ml": "മുംബൈ",
            "yi": "מומביי",
            "ko": "뭄바이",
            "th": "มุมไบ",
            "fa": "مومبای",
            "te": "ముంబై",
            "mr": "मुंबई",
            "si": "මුම්බායි",
            "ka": "მუმბაი",
            "he": "מומבאי",
            "el": "Μουμπάι",
            "ja": "ムンバイ",
            "sk": "Bombaj",
            "fr": "Bombay",
            "lt": "Mumbajus",
            "gu": "મુંબઈ",
            "ta": "மும்பை",
            "es": "Bombay",
            "ia": "Mumbai",
            "ru": "Мумбаи",
            "cs": "Bombaj",
            "ks": "بَمبَے",
            "zh": "孟买",
            "sr": "Мумбај",
            "eo": "Mumbajo",
            "sd": "ممبئي"
        },
        "lat": 19.0785451,
        "lon": 72.878176,
        "country": "IN",
        "state": "Maharashtra"
    }
]
 */