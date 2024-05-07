import { Toaster } from 'react-hot-toast';

export default function ToastContainer() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: 'font-medium',
        duration: 3000,
        style: {
          background: '#fff',
          // color: '#000',
        },

        success: {
          style: {
            color: 'green',
          },
        },
        error: {
          style: {
            color: 'red',
          },
        },
      }}
    />
  );
}
