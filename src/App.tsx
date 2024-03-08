function App() {
  return (
    <div className="container flex">
      <div className="h-40 w-40 bg-[var(--color-primary)]">Primary theme</div>
      <div className="h-40 w-40 bg-[var(--color-primary)]" data-theme="forest">
        Primary theme
      </div>
      <div className="h-40 w-40 bg-[var(--color-primary)]" data-theme="candy">
        Primary theme
      </div>
    </div>
  );
}

export default App;
