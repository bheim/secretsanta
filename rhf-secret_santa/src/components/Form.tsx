import React from "react";

export const Form = () => {
  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="email" name="name" />

            <label htmlFor="emal">Email</label>
            <input type="email" id="email" name="email" />

            <button>Submit</button>
        </form>
    </div>
  );
};


