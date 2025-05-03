import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Multi-Step Form Demo</h1>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="text-xl bg-black text-white">
              Open Form
            </Button>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
