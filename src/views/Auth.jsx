import React from 'react';
import { useState, useEffect } from 'react';

export default function Auth() {
  return (
    <>
      <h1>Guestbook</h1>
      <div>
        <h2>Sign In</h2>
        <form>
          <input type="email" id="email" placeholder="Email" />{' '}
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="email" id="email" placeholder="Email" />{' '}
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}
