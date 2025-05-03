import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Button } from "@/components/ui/button";
import FormModal from "./components/FormModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Multi-Step Form Demo</h1>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="text-xl" onClick={() => setIsModalOpen(true)}>
              Open Form
            </Button>
          </div>
        </div>

        <FormModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </Provider>
  );
};

export default App;
