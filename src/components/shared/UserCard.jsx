import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./UserCard.css";

export default function UserCard({
  userInfo,
  handleUpdateFormOpen,
  index,
  handleDelete,
}) {
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: "0px 0px 4px lightgray",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ minWidth: "25%" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Name
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.primary">
            {userInfo.name}
          </Typography>
        </div>

        <div style={{ minWidth: "25%" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Email
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.primary">
            {userInfo.email}
          </Typography>
        </div>

        <div style={{ minWidth: "25%" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Phone
          </Typography>
          <Typography sx={{ fontSize: 18 }} color="text.primary">
            {userInfo.phone}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            handleUpdateFormOpen(index);
          }}
          size="small"
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            handleDelete(index);
          }}
          size="small"
          sx={{ color: "red" }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
