<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rappi Farma</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <!-- nprogress -->
    <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
    <!-- nprogress -->
</head>
<body class="antialiased">
<v-app id="app"></v-app>

<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
