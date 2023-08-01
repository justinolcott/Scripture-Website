<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Scripture from './Scripture.svelte';
	import Book from './Book.svelte';
	import Chapter from './scriptures/Chapter.svelte';
	import Verse from './Verse.svelte';
	
	import { getAbbreviation } from './names';


	import bom from './scriptures/book-of-mormon.json';
	import embeddings from './jsons/embedding_dict.json';
	import cfm from './jsons/bom_cfm_map.json';
	import manual from './jsons/bom_manual_map.json';
	import talks from './jsons/bom_talk_map.json';

	//export let name;
	let selectedWork = 'bofm';
	let selectedBook = null;
	let abbreviatedBook = null;
	let selectedChapter = null;
	let selectedVerse = null;
	let subEmbedding = null

	function getTalks() {
		// Check if each nested property exists before accessing it
		if (
			talks &&
			talks[selectedWork] &&
			talks[selectedWork][abbreviatedBook] &&
			talks[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()] &&
			talks[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()]
		) {
			return talks[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()];
		} else {
			// Return a default value or handle the case when the property chain is not valid
			console.log(selectedWork + " " + abbreviatedBook + " " + selectedChapter.chapter.toString() + ":" + selectedVerse.verse.toString());
			return null;
		}
	}

	function getCFMReferences() {
		// Check if each nested property exists before accessing it
		if (
			cfm &&
			cfm[selectedWork] &&
			cfm[selectedWork][abbreviatedBook] &&
			cfm[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()] &&
			cfm[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()]
		) {
			return cfm[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()];
		} else {
			// Return a default value or handle the case when the property chain is not valid
			console.log(selectedWork + " " + abbreviatedBook + " " + selectedChapter.chapter.toString() + ":" + selectedVerse.verse.toString());
			return null;
		}
	}

	function getManualReferences() {
		// Check if each nested property exists before accessing it
		if (
			manual &&
			manual[selectedWork] &&
			manual[selectedWork][abbreviatedBook] &&
			manual[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()] &&
			manual[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()]
		) {
			return manual[selectedWork][abbreviatedBook][selectedChapter.chapter.toString()][selectedVerse.verse.toString()];
		} else {
			// Return a default value or handle the case when the property chain is not valid
			console.log(selectedWork + " " + abbreviatedBook + " " + selectedChapter.chapter.toString() + ":" + selectedVerse.verse.toString());
			return null;
		}
	}

	function handleBookSelection(book) {
		selectedBook = book;
		abbreviatedBook = getAbbreviation(selectedBook.book);
		subEmbedding = embeddings[selectedBook.book];
		// Perform any other actions based on the selected book
		console.log('Selected book:', selectedBook.book);
		console.log("talkssss:", talks['bofm']['1-ne']['1']['1']);
  	}

	function handleChapterSelection(chapter) {
		selectedChapter = chapter;
		// Perform any other actions based on the selected chapter
		console.log('Selected chapter:', selectedChapter);
	}

	function handleVerseSelection(verse) {
		selectedVerse = verse;
		console.log('Selected verse:', selectedVerse);
		console.log("talks:", getTalks());
	}
	
	let books = bom.books;
	console.log("Embeddings:", embeddings);
</script>


<svelte:head>
  <title>My Svelte App</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Other meta tags, CSS links, etc. -->
</svelte:head>
<Header title="Scripture References!" />
<main>
	
	{#if selectedBook == null}
		<Scripture books={books} onSelectBook={handleBookSelection} />
	{:else if selectedChapter == null}
		<Book chapters={selectedBook.chapters} onSelectChapter={handleChapterSelection} />
	{:else if selectedVerse == null}
		<Chapter chapter={selectedChapter} onSelectVerse={handleVerseSelection} />
	{:else if selectedVerse != null}
		<Verse verse={selectedVerse} embeddings={subEmbedding} talks={getTalks()} cfmReferences={getCFMReferences()} manualReferences={getManualReferences()}/>
	{/if}
</main>
<Footer />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>