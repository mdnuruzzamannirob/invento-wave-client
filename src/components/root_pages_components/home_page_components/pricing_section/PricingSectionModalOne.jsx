import { MdOutlineNoEncryptionGmailerrorred } from "react-icons/md";

const PricingSectionModalOne = () => {
  return (
    <>
      <dialog id="my_modal_1" className="modal -z-1">
        <div className="modal-box text-center">
          <p className="mt-10 mb-5 flex items-center justify-center">
            {" "}
            <MdOutlineNoEncryptionGmailerrorred className="w-20 h-20" />
          </p>

          <h3>
            You are a <span className="font-medium ">System-Admin</span>
          </h3>
          <h3 className="mt-3 mb-10">You can&apos;t go this route</h3>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PricingSectionModalOne;
