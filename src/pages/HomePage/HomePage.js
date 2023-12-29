import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex justify-center items-start">
      <ul className="space-y-3">
        <li>
          <Link to={"/users/sign_up_new"}>/users/sign_up_new</Link>
        </li>
        <li>
          <Link to={"/users/invitation"}>/users/invitation</Link>
        </li>
      </ul>
    </main>
  );
}
