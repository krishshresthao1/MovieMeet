import { useNavigate } from "react-router-dom";

function CreateRoom() {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate("/room");
  };

  return (
    <button className="primary-button" onClick={handleCreateRoom}>
      Create a room
      <span>→</span>
    </button>
  );
}

export default CreateRoom;
