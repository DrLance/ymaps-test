<?php get_header(); ?>
<section class="headings" id="mockup">
	<main>
		<h1 data-aos="slow-title"><?php the_title(); ?></h1>
		<div class="codecolorer-container javascript solarized-dark home" data-aos="slow-up">
            <?php the_content(); ?>
		</div>
	</main>
</section>
<!-- container -->
<div class="container">
	<!-- site-content -->
	<div class="site-content front-page">
		<h2 class="center fixed" data-aos="fade-up-slow">Head 2</h2>
		<section class="features">
			<ul>
				<li data-aos="slow-list">
					Item
				</li>
			</ul>
		</section>
		<section class="github" data-aos="slow-button" data-aos-offset="10">
			<a href="#" target="_blank" class="button icon github">Main</a>
		</section>
	</div>
	<!-- /site-content -->
</div>
<!-- /container -->
<?php get_footer(); ?>