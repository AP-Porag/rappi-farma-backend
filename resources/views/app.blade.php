<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('settings.site_title') ?? config('app.name') }}</title>
    <link rel="icon" type="image/svg+xml" href="{{ config('settings.site_favicon') }}">
{{--    <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">--}}
{{--    <link rel="icon" type="image/png" href="/assets/images/favicon.png">--}}
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
