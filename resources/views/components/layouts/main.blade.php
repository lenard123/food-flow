<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Flow</title>
    <link rel="shortcut icon" href="{{ asset('/assets/images/foodflow-2.png') }}" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('/assets/fontawesome/css/all.min.css') }}">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    {{ $slot }}

    <script>
        window.currentUser = @json(Auth::user())
    </script>
</body>
</html>