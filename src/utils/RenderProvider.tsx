import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";

export const RenderProvider = () => { // TODO: implement better provider 
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  );
};
