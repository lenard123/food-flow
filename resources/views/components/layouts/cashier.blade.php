<x-layouts.main>
    <div class="h-screen flex bg-slate-50">
        <aside class="bg-white w-16 flex flex-col py-6 items-center shadow-sm flex-shrink-0">

            <img class="w-12 aspect-square" src="{{ url('assets/images/foodflow-2.png') }}" />

            <div class="flex-grow flex flex-col w-full my-8">
                <a href="{{ url('/home') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-home"></i>
                </a>

                <a href="{{ url('/orders') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-clock"></i>
                </a>

                <a href="{{ url('/products') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-burger-soda"></i>
                </a>
            </div>

            <div class="flex flex-col w-full">
                <a href="#" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-cog"></i>
                </a>

                <a href="{{ url('/login') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-sign-out"></i>
                </a>
            </div>

        </aside>
        <main class="flex-grow">
            {{ $slot }}
        </main>
    </div>
</x-layouts.main>