"use client";

export default function Home() {
  console.log(
    "%c what are you doing here?",
    "color: #00FF00; font-size: 20px; font-weight: bold;"
  );
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 flex-col sm:flex-row">
          <h1>Hello Stranger</h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
