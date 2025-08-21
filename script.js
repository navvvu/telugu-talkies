// content list (kept your wording/case exactly)
const LIST = [
    {
      title: "Telugu Manuscript (Digital Library of India)",
      url: "https://archive.org/details/dli.csl.8573/page/n77/mode/2up",
      tags: ["book", "archive", "telugu"],
      desc: "Digitized Telugu manuscript from the Digital Library of India, hosted on Archive.org.",
      year: null // unknown
    },
    {
      title: "Telugu Manuscript — Volume II (Digital Library of India)",
      url: "https://archive.org/details/dli.csl.8311/page/n325/mode/2up",
      tags: ["book", "archive", "telugu"],
      desc: "Second volume of a Telugu text preserved in the DLI collection.",
      year: null // unknown
    },
    {
      title: "Chandamama (Telugu) · April 1992",
      url: "https://archive.org/details/Chandamama/Chandamama1992April/",
      tags: ["magazine", "telugu", "archive"],
      desc: "April 1992 issue of the classic children’s magazine Chandamama in Telugu.",
      year: 1992
    },
    {
      title: "FilmIndia Magazine · May 1939",
      url: "https://ia804508.us.archive.org/15/items/filmindia193905unse/filmindia193905unse.pdf",
      tags: ["magazine", "film", "1939"],
      desc: "Historic issue of FilmIndia from May 1939, available as a full PDF scan.",
      year: 1939
    },
    {
      title: "Indian Film Posters (Letterform Archive)",
      url: "https://letterformarchive.org/news/indian-movie-posters/?srsltid=AfmBOop5YQQlDkyHhW_BpNsntKx5nEq5wIe4iCB5Sdtgcg7zDSe9hbEF",
      tags: ["posters", "cinema", "design"],
      desc: "Letterform Archive article featuring vintage Indian film posters and their design history.",
      year: null // article, not tied to a single year
    },
    {
      title: "Vintage Telugu Posters (Reddit Thread)",
      url: "https://www.reddit.com/r/tollywood/comments/w4fu1v/a_collection_of_vintage_classic_telugu_movie/",
      tags: ["reddit", "telugu", "movies"],
      desc: "Reddit community post compiling vintage Telugu movie posters and memorabilia.",
      year: null // community collection
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
  