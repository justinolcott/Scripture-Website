<script>
    export let verse;
    export let embeddings;
    export let talks;
    export let cfmReferences;
    export let manualReferences;
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
      <h3> General Conference </h3>
      {#each talks as talk}
      <div>
        <h4>{talk.title}</h4>
        <h4>{talk.author}</h4>
        <p>{talk.role}</p>
        <!-- <p>{talk.kicker}</p> -->
        <p>{talk.date}</p>
        <!-- <p>{talk.scripture}</p> -->
        <!-- <p>{talk.content}</p> -->
        <div>{@html (decodeURIComponent(talk.html))}</div>
      </div>
      {/each}
    </div>
    <div class="column">
      <h3> Come, Follow Me</h3>
      {#each cfmReferences as cfm}
      <div>
        <h5>{cfm.scripture}</h5>
        <h4>{cfm.header}</h4>
        <div>{(decodeURIComponent(cfm.content))}</div>
      </div>
      {/each}
    </div>
    <div class="column">
      <h3> Institute Manual </h3>
      {#each manualReferences as ref}
      <div>
        <h5>{ref.scripture}</h5>
        <h4>{ref.header}</h4>
        <div>{(decodeURIComponent(ref.content))}</div>
      </div>
      {/each}
    </div>
    <div class="column">
        <h3>Similar Verses via embeddings</h3>
        {#each embed as similarVerse}
            <p>{similarVerse[0]} {similarVerse[1]}</p>
        {/each}
      <!-- Future Component 4 -->
    </div>
  </div>
  