import { useNavigate } from "react-router-dom";

function JoinRoom() {
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    navigate("/room");
  };

  return (
    <button className="secondary-button" onClick={handleJoinRoom}>
      Join with code
    </button>
  );
}

export default JoinRoom;
