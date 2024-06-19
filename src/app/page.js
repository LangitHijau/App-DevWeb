"use client";
import { useEffect } from "react";
import NavBar from "./component/nav-bar";
import Link from "./component/Links";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  });
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>Navbar example</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how fixed to top
            navbar works. As you scroll, it will remain fixed to the top of your
            browser’s viewport.
          </p>
          
        </div>
      </main>
    </>
  );
}
