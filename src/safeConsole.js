location.reload = () => console.warn('Blocked reload');
window.close = () => console.warn('Blocked window.close');

// 👇 Block console clearing
console.clear = () => console.warn('Blocked console.clear()');

// 👇 Optional: track errors
window.onerror = (message, source, lineno, colno, error) => {
  console.warn('Intercepted error:', message);
  return true;
};

// 🔒 Console Protection
console.log = Function.prototype.bind.call(console.log, console);
console.warn = Function.prototype.bind.call(console.warn, console);
console.error = Function.prototype.bind.call(console.error, console);
console.clear = () => {
  console.warn('Blocked console.clear()');
};

window.close = () => console.warn('Blocked window.close()');
location.reload = () => console.warn('Blocked location.reload()');

window.onerror = (message, source, lineno, colno, error) => {
  console.error('Intercepted error:', message);
  return true;
};
