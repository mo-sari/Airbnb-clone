import React from "react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button className="capitalize m-8" variant="default" size="lg">
        Click here
      </Button>
    </div>
  );
};

export default HomePage;
