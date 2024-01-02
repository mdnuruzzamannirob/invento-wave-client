import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

const PricingSectionModalTwo = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal -z-1">
        <div className="modal-box text-center">
          <p className="mt-10 mb-5 flex items-center justify-center">
            {" "}
            <MdOutlineNoEncryptionGmailerrorred className="w-20 h-20" />
          </p>

          <h3 className="font-medium">You have not any created shop</h3>
          <h3 className="mt-3 ">Please create a shop first</h3>
          <Link to={"/create-shop"} className="z-10">
            <Button className={"my-10"}>Create Shop Now</Button>
          </Link>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PricingSectionModalTwo;
