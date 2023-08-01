<script>
    export let verse;
    export let embeddings;
    console.log("Embeddings:", embeddings);
    let embed = [];
    if (verse.reference in embeddings) {
        embed = embeddings[verse.reference];
    }
    console.log(embed);
  </script>
  
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 16px;
    }
  
    .verse-row {
      grid-column: 1 / -1;
    }
  
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    @media screen and (max-width: 600px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
  </style>
  
  <div class="container">
    <div class="verse-row">
      <p>{verse.verse} {verse.text}</p>
    </div>
    <div class="column">
        <p>hello</p>
      <!-- Future Component 1 -->
    </div>
    <div class="column">
        <p>hello</p>
      <!-- Future Component 2 -->
    </div>
    <div class="column">
        <p>hello</p>
      <!-- Future Component 3 -->
    </div>
    <div class="column">
        <h4>Similar Verses via embeddings</h4>
        {#each embed as similarVerse}
            <p>{similarVerse[0]} {similarVerse[1]}</p>
        {/each}
      <!-- Future Component 4 -->
    </div>
  </div>
  