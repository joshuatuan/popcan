function ErrorMessage({ className, children }) {
  return (
    <p className={`px-15 text-center ${className}`}>
      <span>❌</span> {children}
    </p>
  );
}

export default ErrorMessage;
