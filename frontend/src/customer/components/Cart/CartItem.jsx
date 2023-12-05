import { IconButton, Button, ButtonGroup } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function CartItem() {
  return (
    <div className="p-5 shadow-md border rounded-lg mb-6">
      <div className="flex items-center">
        <div className="w-[5rem} h-[5rem] lg:w-[12rem] lg:h-[5rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="opacity-70">Vero, facilis excepturi </p>
          <p className="opacity-70 mt-2">Vero, facilis excepturi </p>
          <div className="flex space-x-2 pt-3 p-l-3">
            <p className="font-semibold">&#8377; 799</p>
            <p className="line-through opacity-50">&#8377; 499</p>
            <p className="font-semibold text-green-500">30% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center flex-wrap lg:space-x-10 pt-4 gap-10">
        <div className="">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button color="warning">
              <RemoveCircleOutlineIcon />
            </Button>
            <Button>
              <span className="font-semibold">4</span>
            </Button>
            <Button color="success">
              <AddCircleOutlineIcon />
            </Button>
          </ButtonGroup>
        </div>

        <div className="">
          <Button variant='outlined' color='error'>Remove</Button>
        </div>
      </div>
    </div>
  );
}
