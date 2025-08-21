// content list (kept your wording/case exactly)
const LIST = [
    {
      title: "Ancient Indian Text (Telugu · Archive.org)",
      url: "https://archive.org/details/dli.csl.8573/page/n77/mode/2up",
      tags: ["book", "archive", "telugu"],
      desc: "Digitized Telugu manuscript from the Digital Library of India, preserved on Internet Archive."
    },
    {
      title: "Ancient Indian Text (Telugu · Archive.org, Second Volume)",
      url: "https://archive.org/details/dli.csl.8311/page/n325/mode/2up",
      tags: ["book", "archive", "telugu"],
      desc: "Another volume of a digitized Telugu text from the Digital Library of India."
    },
    {
      title: "Chandamama Magazine (Telugu · April 1992)",
      url: "https://archive.org/details/Chandamama/Chandamama1992April/",
      tags: ["magazine", "telugu", "archive"],
      desc: "April 1992 issue of Chandamama Telugu magazine, digitized and hosted on Internet Archive."
    },
    {
      title: "FilmIndia Magazine · May 1939",
      url: "https://ia804508.us.archive.org/15/items/filmindia193905unse/filmindia193905unse.pdf",
      tags: ["magazine", "film", "1939"],
      desc: "The May 1939 issue of *FilmIndia*, a pioneering Indian film magazine, available as a PDF."
    },
    {
      title: "Indian Movie Posters (Letterform Archive)",
      url: "https://letterformarchive.org/news/indian-movie-posters/?srsltid=AfmBOop5YQQlDkyHhW_BpNsntKx5nEq5wIe4iCB5Sdtgcg7zDSe9hbEF",
      tags: ["posters", "cinema", "design"],
      desc: "An article from Letterform Archive showcasing historic Indian movie posters and their design legacy."
    },
    {
      title: "Vintage Telugu Movie Posters (Reddit)",
      url: "https://www.reddit.com/r/tollywood/comments/w4fu1v/a_collection_of_vintage_classic_telugu_movie/",
      tags: ["reddit", "telugu", "movies"],
      desc: "A curated Reddit thread sharing vintage and classic Telugu movie stills, posters, and memorabilia."
    }
  ];
  
  const listEl   = document.getElementById("list");
  const searchEl = document.getElementById("search");
  
  // simple render
  function render(items) {
    const q = (searchEl.value || "").toLowerCase().trim();
  
    const filtered = items.filter(i => {
      const hay = (i.title + " " + i.desc + " " + (i.tags||[]).join(" ")).toLowerCase();
      return !q || hay.includes(q);
    });
  
    listEl.innerHTML = filtered.map(i => `
      <article class="card">
        <h3><a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.title}</a></h3>
        <p>${i.desc}</p>
        ${(i.tags || []).map(t => `<span class="badge">${t}</span>`).join("")}
      </article>
    `).join("") || "<p>No results.</p>";
  }
  
  // input -> render
  searchEl.addEventListener("input", render.bind(null, LIST));
  
  // initial paint
  render(LIST);
  