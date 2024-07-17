<?php
/*
Template Name: Memory Game
*/

get_header(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Memory Game</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playwrite+CL:wght@100..400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <script src="<?php echo get_template_directory_uri(); ?>/src/jogoDaMemoria.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/src/util.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/src/tela.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/index.js"></script>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
    <meta property="og:title" content="Memory Game - JS Fundamentals">
    <meta property="og:description" content="Michele Born's Final project for the JS Fundamentals course by Erick Wendell.">
    <meta property="og:image" content="https://www.micheleborn.com/memory-game/og-img.jpg">
    <meta property="og:url" content="https://www.quietoode.com/memory-game">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Memory Game">
    <meta property="og:locale" content="en_US">
</head>
<body>

    <div class="menu">
        <a href="https://www.micheleborn.com">Back to Michele Born</a> | <a href="https://github.com/micheleborn/memory-game">View Repository</a> | <a href="https://erickwendel.com/">Buy this course</a>
    </div>

    <div class="buttons-wrapper">
        <div class="top-buttons-wrapper">
            <button type="button" class="btn btn-success" id="jogar">Shuffle</button>
            <button type="button" class="btn btn-danger" id="mostrarTudo">Show all</button>
        </div>

        <div id="carregando" class="row container-fluid invisible">
            <strong id="contador">Countdown! </strong>
            <div class="spinner-border text-warning spinner-border-sm" role="status"></div>
        </div>
    </div>

    <div id="cards-wrapper"></div>

    <div class="status-wrapper">
        <div id="mensagem" class="alert alert-success invisible" role="alert"></div>
    </div>

</body>
<footer>
    This Memory Game has been designed and developed by <a href="https://www.micheleborn.com">Michele Born</a> as the final project of the JS Fundamentals Course by <a href="https://cursos.erickwendel.com.br/?origin=timeline">Erick Wendell</a> | <a href="https://cursos.erickwendel.com.br/?origin=timeline">Get yours</a>
</footer>
</html>

<?php get_footer(); ?>
