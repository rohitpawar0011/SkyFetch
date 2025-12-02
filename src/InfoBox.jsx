import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function InfoBox({info}) {
  const HOT_URL= "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=hSN4NX8sEY_MebaOzk_-W4e3gDh8g9prlK6t4hUw3mQ=";
  const COLD_URL="https://media.istockphoto.com/id/473246812/photo/frozen-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=SzGb9hGuhMuCdjU4z-VuC2hsA50wsCD0fQ0rHrbxq60=";
  const RAIN_URL="https://media.istockphoto.com/id/1060365772/photo/the-rain-arriving-in-sao-paulo-brazil.webp?a=1&b=1&s=612x612&w=0&k=20&c=xA7Q5IwC78YaM8JdJGXDBeGHKDUCF_QpQhCm6hTtql8=";

    return (
      <div className="InfoBox">
            <h2>Weather Info</h2>
      <div className="cardConatiner">
       <Card sx={{ maxWidth: 345 }}>
          <CardMedia
           sx={{ height: 140 }}
           image={info.humidity> 85? RAIN_URL : info.temp>20? HOT_URL: COLD_URL}
           title="green iguana"
          />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity> 85? <ThunderstormIcon/> : info.temp>20? <LocalFireDepartmentIcon/>:<AcUnitIcon/>}
        </Typography> 
        <Typography variant="body2" color='text.secondary' component={"span"} >
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Minimum Temp = {info.tempMin}&deg;C</p>
         <p>Maximum Temp = {info.tempMax}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>      
    </div>
    );
}