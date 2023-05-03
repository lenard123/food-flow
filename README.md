### Prerequisite
- php8.2
- composer
- mysql
- nodejs (v16+)

### Setting UP
1. run `npm install`
2. run `npm run build`
2. run `composer install`
3. copy .env.example to .env
4. Setup database connection
5. run `php artisan key:generate`
6. run `php artisan migrate:fresh --seed`
7. run `php artisan storage:link`

### Starting the application
1. run `php artisan serve`
