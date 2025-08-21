const LIST = [
    {
      title: "The Indian Textile Journal [1854–1954]",
      url: "https://archive.org/details/dli.csl.8311/page/n325/mode/2up",
      tags: ["journal", "textile", "archive"],
      desc: "Centenary volume covering a hundred years of India’s textile mills, trade, and education",
      year: "1854–1954"
    },
    {
      title: "Chandamama (Telugu) [April 1992]",
      url: "https://archive.org/details/Chandamama/Chandamama1992April/",
      tags: ["magazine", "telugu", "archive"],
      desc: "April 1992 issue of Chandamama, the classic Telugu children’s magazine of stories and art",
      year: 1992
    },
    {
      title: "FilmIndia Magazine [May 1939]",
      url: "https://ia804508.us.archive.org/15/items/filmindia193905unse/filmindia193905unse.pdf",
      tags: ["magazine", "film", "1939"],
      desc: "May 1939 issue of FilmIndia, one of the earliest and most influential Indian film journals",
      year: 1939
    },
    {
      title: "Indian Film Posters (Letterform Archive) [Article]",
      url: "https://letterformarchive.org/news/indian-movie-posters/?srsltid=AfmBOop5YQQlDkyHhW_BpNsntKx5nEq5wIe4iCB5Sdtgcg7zDSe9hbEF",
      tags: ["posters", "cinema", "design"],
      desc: "Illustrated article from Letterform Archive on the visual history of Indian movie posters",
      year: null
    },
    {
      title: "Vintage Telugu Posters (Reddit Thread) [Community]",
      url: "https://www.reddit.com/r/tollywood/comments/w4fu1v/a_collection_of_vintage_classic_telugu_movie/",
      tags: ["reddit", "telugu", "movies"],
      desc: "Community thread collecting classic Telugu movie posters and stills",
      year: null
    },
    {
      title: "5000 Indian Designs and Motifs [1965]",
      url: "https://archive.org/details/dli.csl.8573/page/n77/mode/2up",
      tags: ["design", "motifs", "india", "book"],
      desc: "1965 volume from the Indian Institute of Art in Industry, showcasing thousands of traditional design motifs.",
      year: 1965
    }
  ];
  
  
  const listEl   = document.getElementById("list");
  const searchEl = document.getElementById("search");
  
  // render stuff on the page
  function render(items) {
    const q = (searchEl.value || "").toLowerCase().trim();
  
    // check if query matches anything in title/desc/tags
    const filtered = items.filter(i => {
      const hay = (i.title + " " + i.desc + " " + (i.tags||[]).join(" ")).toLowerCase();
      return !q || hay.includes(q);
    });
  
    // show results (or show "no results")
    listEl.innerHTML = filtered.map(i => `
      <article class="card">
        <h3><a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.title}</a></h3>
        <p>${i.desc}</p>
        ${(i.tags || []).map(t => `<span class="badge">${t}</span>`).join("")}
      </article>
    `).join("") || "<p>No results.</p>";
  }
  
  // re-run render every time someone types
  searchEl.addEventListener("input", render.bind(null, LIST));
  
  // first load
  render(LIST);
  