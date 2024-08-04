import axios from "axios";
import { Button } from "./ui/button";

const CancelButton = ({ id }: { id: string }) => {
  const onCancel = async () => {
    const response = await axios.delete(`api/cancel/${id}`);
    console.log(response.data);
  };
  return <Button onClick={onCancel}>Cancel</Button>;
};

export default CancelButton;
