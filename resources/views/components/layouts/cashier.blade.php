<x-layouts.main>
    <div class="h-screen flex bg-slate-50">
        <aside class="bg-white w-16 flex flex-col py-6 items-center shadow-sm flex-shrink-0">

            <img class="w-12 aspect-square" src="{{ url('assets/images/foodflow-2.png') }}" />

            <div class="flex-grow flex flex-col w-full my-8">
                <a href="{{ url('/') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-home"></i>
                </a>

                <a href="{{ url('/products') }}" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-burger-soda"></i>
                </a>
            </div>

            <div class="flex flex-col w-full">
                <a href="#" class="text-center border-x-4 border-transparent py-2 text-xl text-slate-600">
                    <i class="fal fa-cog"></i>
                </a>

                <form action="{{ url('/logout') }}" method="POST" class="w-full">
                    @csrf
                    <button type="submit" class="text-center w-full border-x-4 border-transparent py-2 text-xl text-slate-600">
                        <i class="fal fa-sign-out"></i>
                    </button>
                </form>

            </div>

        </aside>
        <main class="flex-grow">
            {{ $slot }}
        </main>
    </div>
</x-layouts.main>