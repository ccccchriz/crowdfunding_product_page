import { forwardRef, useImperativeHandle, useRef } from "react";

interface ThanksDialogProps {
  children: React.ReactNode;
}

const SelectionDialog = forwardRef(
  ({ children }: ThanksDialogProps, ref: React.Ref<HTMLDialogElement>) => {
    const dialog = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref, () => dialog.current!, []);

    return (
      <dialog
        ref={dialog}
        className="rounded-lg backdrop:bg-black backdrop:opacity-70 max-w-4xl"
      >
        <div className="font-primary rounded-lg p-4 grid gap-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">Back this project</h2>
            <button
              type="button"
              onClick={() => dialog.current!.close()}
              autoFocus
            >
              <span className="sr-only">close</span>
              <img src="assets/images/icon-close-modal.svg" alt="" />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    );
  }
);

export default SelectionDialog;
