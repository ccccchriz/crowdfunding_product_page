import { forwardRef, useImperativeHandle, useRef } from "react";

interface ThanksDialogProps {
  message: string;
}

const ThanksDialog = forwardRef(
  ({ message }: ThanksDialogProps, ref: React.Ref<HTMLDialogElement>) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => dialog.current!, []);

    return (
      <dialog
        ref={dialog}
        className="absolute  rounded-lg backdrop:bg-black backdrop:opacity-70"
      >
        <div className="grid place-items-center text-center gap-4 px-4 py-12 font-primary rounded-lg">
          <img src="assets/images/icon-check.svg" alt="" />
          <h2 className="text-xl font-bold">Thanks for your support</h2>
          <p className="text-neutral-dark-gray">{message}</p>
          <button
            type="button"
            onClick={() => dialog.current!.close()}
            className="bg-primary-cyan text-white px-8 py-2 rounded-full font-medium"
          >
            Got it!
          </button>
        </div>
      </dialog>
    );
  }
);

export default ThanksDialog;
