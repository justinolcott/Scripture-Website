<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Scripture from './Scripture.svelte';
	import Book from './Book.svelte';
	import Chapter from './scriptures/Chapter.svelte';
	import Verse from './Verse.svelte';

	import bom from './scriptures/book-of-mormon.json'
	import embeddings from './jsons/embedding_dict.json'

	export let name;
	let selectedBook = null;
	let selectedChapter = null;
	let selectedVerse = null;
	let subEmbedding = null

	function handleBookSelection(book) {
		selectedBook = book;
		subEmbedding = embeddings[selectedBook.]
		// Perform any other actions based on the selected book
		console.log('Selected book:', selectedBook.book);
  	}

	function handleChapterSelection(chapter) {
		selectedChapter = chapter;
		// Perform any other actions based on the selected chapter
		console.log('Selected chapter:', selectedChapter);
	}

	function handleVerseSelection(verse) {
		selectedVerse = verse;
		console.log('Selected verse:', selectedVerse);
	}
	
	let books = bom.books;
	console.log("Embeddings:", embeddings);
</script>

<Header title="My App" />
<main>
	
	{#if selectedBook == null}
		<Scripture books={books} onSelectBook={handleBookSelection} />
	{:else if selectedChapter == null}
		<Book chapters={selectedBook.chapters} onSelectChapter={handleChapterSelection} />
	{:else if selectedVerse == null}
		<Chapter chapter={selectedChapter} onSelectVerse={handleVerseSelection} />
	{:else if selectedVerse != null}
		<Verse verse={selectedVerse} embeddings={subEmbedding} />
	{/if}
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<Footer />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>