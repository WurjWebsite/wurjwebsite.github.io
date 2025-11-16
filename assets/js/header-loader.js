// Load header component
// Note: This must run BEFORE the main.js dropotron initialization
(function() {
	const headerHTML = `<header id="header" class="alt">
	<h1 id="logo"><a href="index.html"><img src="images/logo.jpg" alt="" /></a></h1>
	<nav id="nav">
		<ul>
			<li class="home-button"><a href="index.html" class="icon solid fa-home"><span class="label">Home</span></a></li>
			<li class="submenu">
				<a href="#">Menu</a>
				<ul>
					<li><a href="print_editions.html">Editions</a></li>
					<li><a href="submissions.html">Submit</a></li>
					<li><a href="news.html">News</a></li>
					<li><a href="board.html">Board</a></li>
					<li><a href="about_us.html">About Us</a></li>
				</ul>
			</li>
		</ul>
	</nav>
</header>`;

	$('#header-placeholder').html(headerHTML);
})();
