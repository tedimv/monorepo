import type { Component } from 'solid-js';
import { Route, Link, Routes } from '@solidjs/router';

import About from './routes/About';
import Home from './routes/Home';

const App: Component = () => {
  return (
    <div class="bg-sky-100 h-full w-full p-10">
      <div class="flex gap-5 mb-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </div>
  );
};

export default App;
