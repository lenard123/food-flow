<x-layouts.main>
    <div class="h-screen flex flex-col justify-center items-center bg-slate-100">
        <div class="bg-white py-4 px-6 pb-6 shadow-lg w-96">
            <img class="w-28 aspect-square mx-auto" src="{{ asset('assets/images/foodflow-2.png') }}">
            <h1 class="text-center font-bold text-4xl italic text-slate-800">Foodflow</h1>
            <p class="text-center text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur</p>

            <form class="mt-8" method="GET" action="{{ url('/home') }}">
                <input type="email" class="border bg-slate-200 py-3 px-4 block w-full font-light focus:outline-none focus:border-primary-300" placeholder="Enter your email here.">
                <input type="password" class="border bg-slate-200 py-3 px-4 block w-full mt-4 font-light focus:outline-none focus:border-primary-300" placeholder="Enter your password here.">
                <button class="bg-primary py-3 text-sm w-full mt-4 text-white">Login</button>
            </form>

            <div class="mt-8 text-center text-sm text-slate-500">
                Forgot password? Click <a class="text-primary" href="#">here</a>.
            </div>

        </div>
    </div>
</x-layouts-main>