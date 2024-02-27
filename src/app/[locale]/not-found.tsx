const NotFound = () => {
  return (
    <html>
      <body className="w-full h-screen bg-black/90 flex justify-center items-center">
        <div className="text-3xl  text-red-300 animate-pulse tracking-widest">
          This page {"doesn't"} exist
        </div>
      </body>
    </html>
  );
};
export default NotFound;
