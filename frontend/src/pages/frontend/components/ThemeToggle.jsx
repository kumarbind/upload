import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('bg-dark', 'text-white');
    } else {
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [dark]);

  return (
    <button
      className="btn btn-outline-secondary"
      onClick={() => setDark(!dark)}
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
