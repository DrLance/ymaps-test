<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width">
	<?php wp_head(); ?>
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri() ?>/img/favicon.ico" type="image/x-icon">
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript">
    </script>
</head>

<body <?php body_class(); ?>>
<header id="header" class="header">
	<div class="inner-content">
		<a href="<?php echo home_url(); ?>" class="logo">

		</a>

		<nav class="navigation">
            <?php wp_nav_menu(); ?>
		</nav>
	</div>
</header>
<?php edit_post_link('Edit', '<p class="edit-button">', '</p>'); ?>