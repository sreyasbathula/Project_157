AFRAME.registerComponent("comics-posters", {
    init: function () {
      this.postersContainer = this.el;   
      this.posters();
    },

    posters: function () {
      const postersRef = [
        {
          id: "ironman",
          title: "Ironman",
          url: "./assets/Ironman-poster.jpg",
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/Spiderman-Poster.jpg",
        },
  
        {
          id: "thor",
          title: "Thor",
          url: "./assets/Thor-poster.jpg",
        },
        {
          id: "endgame",
          title: "Avengers Endgame",
          url: "./assets/EndGame-Poster.webp",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        
        const borderEl = this.createBorder(position, item.id);
  
       
        const posters = this.createposters(item);
        borderEl.appendChild(posters);
  
        
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    createposters: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 9,
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });
  