import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const defaultURL = 'https://placekitten.com/200/100';

type IMediaCardProps = {
  img?: string;
  name: string;
  description?: string;
};

export function PlanetCard({
  img = defaultURL,
  name,
  description,
}: IMediaCardProps) {
  return (
    <Card sx={{ width: 300, height: 300 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || 'No description available'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
