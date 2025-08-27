const LIST = [
    {
      title: "The Indian Textile Journal",
      url: "https://archive.org/details/dli.csl.8311/page/n325/mode/2up",
      tags: ["journal", "textile", "archive"],
      desc: "Centenary volume covering a hundred years of India’s textile mills, trade, and education",
      year: "1854–1954"
    },
    {
      title: "Chandamama (Telugu)",
      url: "https://archive.org/details/Chandamama/Chandamama1992April/",
      tags: ["magazine", "telugu", "archive"],
      desc: "April 1992 issue of Chandamama, the classic Telugu children’s magazine of stories and art",
      year: 1992
    },
    {
      title: "FilmIndia Magazine",
      url: "https://ia804508.us.archive.org/15/items/filmindia193905unse/filmindia193905unse.pdf",
      tags: ["magazine", "film", "1939"],
      desc: "May 1939 issue of FilmIndia, one of the earliest and most influential Indian film journals",
      year: 1939
    },
    {
      title: "Indian Film Posters (Letterform Archive)",
      url: "https://letterformarchive.org/news/indian-movie-posters/?srsltid=AfmBOop5YQQlDkyHhW_BpNsntKx5nEq5wIe4iCB5Sdtgcg7zDSe9hbEF",
      tags: ["posters", "cinema", "design"],
      desc: "Illustrated article from Letterform Archive on the visual history of Indian movie posters",
      year: null
    },
    {
      title: "Vintage Telugu Posters (Reddit Thread)",
      url: "https://www.reddit.com/r/tollywood/comments/w4fu1v/a_collection_of_vintage_classic_telugu_movie/",
      tags: ["reddit", "telugu", "movies"],
      desc: "Community thread collecting classic Telugu movie posters and stills",
      year: null
    },
    {
      title: "5000 Indian Designs and Motifs",
      url: "https://archive.org/details/dli.csl.8573/page/n77/mode/2up",
      tags: ["design", "motifs", "india", "book"],
      desc: "Volume from the Indian Institute of Art in Industry, showcasing thousands of traditional design motifs.",
      year: 1965
    },
    {
      title: "A History of Indian Art",
      url: "https://archive.org/details/dli.venugopal.324/page/n329/mode/2up",
      tags: ["art", "india", "book"],
      desc: "History of Indian art from the earliest times up to the third century A.D.",
      year: 1965
    },
    {
      title: "South Indian Paintings",
      url: "https://archive.org/details/SOUTHINDIANPAINTINGS/page/n97/mode/2up",
      tags: ["art", "india", "painting", "book"],
      desc: "Collection of South Indian paintings, with 15th century works. Digitized 2018",
      year: 1968
    },
    {
        title: "Kangra Paintings on Love",
        url: "https://archive.org/details/KANGRAPAINTINGSONLOVE/page/n13/mode/2up",
        tags: ["art", "india", "painting", "book"],
        desc: "By M.S. Randhawa, a study of Kangra paintings centered on love. Digitized 2018",
        year: 1962
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
    listEl.innerHTML = filtered.map(i => {
      const hasYearTag = (i.tags || []).some(t => t === "book" || t === "magazine");
      return `
        <article class="card">
          <h3><a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.title}</a></h3>
          <p>${i.desc}</p>
          <div class="meta">
            ${(i.tags || []).map(t => `<span class="badge">${t}</span>`).join("")}
            ${hasYearTag && i.year ? `<span class="year">${i.year}</span>` : ""}
          </div>
        </article>
      `;
    }).join("") || "<p> sad times but nothing to see here </p>";
  }
  
  // re-run render every time someone types
  searchEl.addEventListener("input", render.bind(null, LIST));
  
  // first load
  render(LIST);
